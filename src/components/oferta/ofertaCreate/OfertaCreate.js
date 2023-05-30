import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";
import { useState } from "react";
import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";
import CurrencyInput from "react-currency-input-field";
import { FormattedMessage, useIntl } from 'react-intl';
import { createAndAssocSchedule } from "../../../helpers/backend/offerBackend";
import {
  BASE_URL,
  GUARDIAN,
  KANGAROO,
  WEEKDAYS,
} from "../../../helpers/constants";
import { convertToCOP } from "../../../helpers/priceFormatter";
import "./OfertaCreate.css";
import {
  buildOfferPayload,
  buildSchedulePayload,
  validateOfferData,
  validateScheduleData,
} from "./OfertaCreaterHelper";

const token = localStorage.getItem("sessionToken");

async function postOffer(offerPayload) {
  const requestOfferPayload = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(offerPayload),
  };
  return fetch(BASE_URL + "/ofertas", requestOfferPayload)
    .then((response) => response.json())
    .then((data) => data);
} 

function OfertaCreate() {
  const intl = useIntl()
  let timesByDay = {};
  WEEKDAYS.forEach((day) => (timesByDay[day] = { start: null, end: null }));

  const [activeDays, setActiveDays] = useState([]);
  const [activeTimes, setActiveTimes] = useState(timesByDay);
  const [price, setPrice] = useState(20000);
  const [offerType, setOfferType] = useState(KANGAROO);
  const [initDate, setInitDate] = useState(dayjs());
  const [endDate, setEndDate] = useState(dayjs().add(1, "d"));

  const cancelOfferCreate = () => {
    console.log("canceling create...");
  };

  const createOffer = async function (event) {
    event.preventDefault();
    console.log("creating offer...");

    let priceCOP = price;
    if(intl.locale === "en-US") {
      priceCOP = convertToCOP(price)
    }

    const offer = {
      price: priceCOP,
      offerType: offerType,
      initDate: initDate,
      endDate: endDate,
    };

    activeDays.forEach((day) => validateScheduleData(activeTimes[day]));

    if (!validateOfferData(offer)) {
      console.log("invalid dates");
    } else {
      const bodyPayload = buildOfferPayload(offer);
      if (!bodyPayload) {
        console.log("invalid user");
      } else {
        console.log("sending post request");
        const offer = await postOffer(bodyPayload);
        const offerId = offer.id;
        console.log(offerId)
        const schedulePayloads = [];
        
        activeDays.forEach((day) => {
          const dayPayload = buildSchedulePayload(day, activeTimes);
          schedulePayloads.push(dayPayload);
        });

        await schedulePayloads.forEach( async (schedule) => {
          const scheudlePayload = {
            method: "POST",
            headers: { "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,},
            body: JSON.stringify(schedule),
          };
          const res = await createAndAssocSchedule(scheudlePayload, offerId)
          if(!res) {
            console.log('error', res)
          } else {
            console.log('gud', res)
          }
        })
        
      }
    }
  };

  const showHourForDay = (event) => {
    const checkedDay = event.target.value;
    if (event.target.checked) {
      setActiveDays([...activeDays, checkedDay]);
    } else {
      setActiveDays((prevDays) => prevDays.filter((day) => day !== checkedDay));
    }
  };
  const updatedActiveTimes = (time, day, start) => {
    console.log(activeTimes);
    if (start) {
      activeTimes[day].start = time;
    } else {
      activeTimes[day].end = time;
    }
    setActiveTimes(activeTimes);
  };

  const renderTime = (day) => {
    if (activeDays.includes(day)) {
      return (
        <Row className="time-pickers">
          <Col>
            <Form.Group controlId="form--StartTime">
              <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={intl.locale}>
                <Form.Label><FormattedMessage id="init-time"/></Form.Label>
                <TimePicker
                  value={activeTimes[day].start}
                  onChange={(newTime) => updatedActiveTimes(newTime, day, true)}
                />
              </LocalizationProvider>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="form--StartTime">
              <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={intl.locale}>
                <Form.Label><FormattedMessage id="end-time"/></Form.Label>
                <TimePicker
                  value={activeTimes[day].end}
                  onChange={(newTime) =>
                    updatedActiveTimes(newTime, day, false)
                  }
                />
              </LocalizationProvider>
            </Form.Group>
          </Col>
        </Row>
      );
    }
  };
  const handleOnValueChange = (value, _, values) => {
    setPrice(value);
  };
  return (
    <Form className="createOffer" onSubmit={createOffer}>
      <h1><FormattedMessage id='new-offer'/></h1>
      <div className="form--items">
        <div className="form--OfferData">
          <Form.Group controlId="form--Price">
            <Form.Label><FormattedMessage id='price'/></Form.Label>
            <CurrencyInput
              id="form--Price-Input"
              name="input-price"
              placeholder={intl.formatMessage({id: 'price-placeholder'})}
              decimalsLimit={0}
              prefix={"$"}
              intlConfig={{ locale: intl.locale, currency: intl.locale === "en-US" ? "USD" : "COP" }}
              onValueChange={handleOnValueChange}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>
          <FormGroup controlId="form--OfferType">
            <Form.Label><FormattedMessage id='offer-type'/></Form.Label>
            <Form.Select
              aria-label="form--OfferType-Input"
              onChange={(e) => setOfferType(e.target.value)}
            >
              <option value={KANGAROO}>Canguro</option>
              <option value={GUARDIAN}>Acudiente</option>
            </Form.Select>
          </FormGroup>
          <div className="form--Dates">
            {/* <div className='dates--StartDate'> */}
            <Form.Group
              className="dates--StartDate"
              controlId="form--StartDate"
            >
              <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={intl.locale}>
                <Form.Label><FormattedMessage id='init-date'/></Form.Label>
                <DatePicker
                  value={initDate}
                  onChange={(newInitDate) => setInitDate(newInitDate)}
                />
              </LocalizationProvider>
            </Form.Group>
            {/* </div>
            <div className='dates--EndDate'> */}
            <Form.Group className="dates--EndDate" controlId="form--EndDate">
              <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={intl.locale}>
                <Form.Label><FormattedMessage id='end-date'/></Form.Label>
                <DatePicker
                  value={endDate}
                  onChange={(newEndDate) => setEndDate(newEndDate)}
                />
              </LocalizationProvider>
            </Form.Group>
            {/* </div> */}
          </div>
        </div>

        <div className="form--ScheduleData">
          <Form.Group controlId="form--Schedule">
            <Form.Label><FormattedMessage id='schedule'/></Form.Label>
            {WEEKDAYS.map((day) => {
              return (
                <Row>
                  <Form.Check
                    type="checkbox"
                    id={day}
                    value={day}
                    label={day}
                    onClick={showHourForDay}
                  />
                  {renderTime(day)}
                </Row>
              );
            })}
          </Form.Group>
        </div>
      </div>

      <div className="submitCancelBtns">
        <div className="offer-cancelBtn">
          <Button
            className="offer-cancelBtn"
            size="lg"
            type="cancel"
            onClick={cancelOfferCreate}
          >
            <FormattedMessage id='cancel'/>
          </Button>
        </div>
        <div className="offer-createBtn">
          <Button
            className="offer-createBtn"
            size="lg"
            type="submit"
            onClick={createOffer}
          >
            <FormattedMessage id='create-offer'/>
          </Button>
        </div>
      </div>
    </Form>
  );
}

export default OfertaCreate;

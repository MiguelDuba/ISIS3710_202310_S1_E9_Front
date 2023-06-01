import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";
import CurrencyInput from "react-currency-input-field";
import { FormattedMessage, useIntl } from "react-intl";
import { createAndAssocSchedule } from "../../../helpers/backend/offerBackend";
import { GUARDIAN, KANGAROO, WEEKDAYS } from "../../../helpers/constants";
import { convertToCOP } from "../../../helpers/priceFormatter";
import "./OfertaCreate.css";
import {
  buildOfferPayload,
  buildSchedulePayload,
  postOffer,
  validateOfferData,
  validateScheduleData,
} from "./OfertaCreaterHelper";

const token = localStorage.getItem("sessionToken");

function OfertaCreate() {
  const intl = useIntl();
  let timesByDay = {};
  WEEKDAYS.forEach((day) => (timesByDay[day] = { start: null, end: null }));

  const [errorMsg, setErrorMsg] = useState(null);
  const [offerData, setOfferData] = useState({
    price: null,
    offerType: KANGAROO,
    initDate: dayjs(),
    endDate: dayjs().add(1, "d"),
    activeDays: [],
    activeTimes: timesByDay,
  });

  const cancelOfferCreate = () => {
    localStorage.removeItem("offer-form-data");
    setOfferData({
      price: 0,
      offerType: KANGAROO,
      initDate: dayjs(),
      endDate: dayjs().add(1, "d"),
      activeDays: [],
      activeTimes: timesByDay,
    });
  };

  useEffect(() => {
    if (!navigator.onLine) {
      console.log(
        "offline",
        JSON.parse(localStorage.getItem("offer-form-data"))
      );
      if (localStorage.getItem("offer-form-data") !== null) {
        const storedForm = JSON.parse(localStorage.getItem("offer-form-data"));
        Object.keys(storedForm.activeTimes).forEach((day) => {
          if (storedForm.activeDays.includes(day)) {
          storedForm.activeTimes[day].start = dayjs(
            storedForm.activeTimes[day].start
          );
          storedForm.activeTimes[day].end = dayjs(
            storedForm.activeTimes[day].end
          );}
        });
        const storedOffer = {
          price: parseInt(storedForm.price),
          offerType: storedForm.offerType,
          initDate: dayjs(storedForm.initDate),
          endDate: dayjs(storedForm.endDate),
          activeDays: [...storedForm.activeDays],
          activeTimes: storedForm.activeTimes,
        };
        console.log('stored', storedOffer);
        setOfferData(storedOffer);
        storedOffer.activeDays.forEach((day) => {
          renderTime(day);});
      }
    }
  }, []);

  const handleInputChange = (name, value) => {
    setOfferData({ ...offerData, [name]: value });
    localStorage.setItem("offer-form-data", JSON.stringify(offerData));
    console.log(offerData);
  };

  const createOffer = async function (event) {
    event.preventDefault();
    let priceCOP = offerData.price;
    if (intl.locale === "en") {
      priceCOP = convertToCOP(offerData.price);
    }

    console.log(offerData);
    const offer = {
      price: priceCOP,
      offerType: offerData.offerType,
      initDate: offerData.initDate,
      endDate: offerData.endDate,
    };

    offerData.activeDays.forEach((day) =>
      validateScheduleData(offerData.activeTimes[day])
    );

    if (!validateOfferData(offer)) {
      setErrorMsg("Invalid Dates");
    } else {
      const bodyPayload = buildOfferPayload(offer);
      if (!bodyPayload) {
        setErrorMsg("Invalid User");
      } else {
        console.log("Sending post request");
        const offer = await postOffer(bodyPayload, token);
        const offerId = offer.id;
        console.log(offerId);
        const schedulePayloads = [];

        offerData.activeDays.forEach((day) => {
          const dayPayload = buildSchedulePayload(day, offerData.activeTimes);
          schedulePayloads.push(dayPayload);
        });

        await schedulePayloads.forEach(async (schedule) => {
          const scheudlePayload = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(schedule),
          };
          const res = await createAndAssocSchedule(scheudlePayload, offerId);
          if (!res) {
            setErrorMsg("Error creating schedule");
          } else {
            alert("Offer created successfully");
          }
        });
      }
    }
  };

  const showHourForDay = (event) => {
    const checkedDay = event.target.value;
    if (event.target.checked) {
      setOfferData({
        ...offerData,
        activeDays: [...offerData.activeDays, checkedDay],
      });
    } else {
      setOfferData({
        ...offerData,
        activeDays: (prevDays) => prevDays.filter((day) => day !== checkedDay),
      });
    }
  };
  const updatedActiveTimes = (time, day, start) => {
    console.log(offerData.activeTimes);
    if (start) {
      offerData.activeTimes[day].start = time;
    } else {
      offerData.activeTimes[day].end = time;
    }
    setOfferData({ ...offerData, activeTimes: offerData.activeTimes });
  };

  const renderTime = (day) => {
    if (offerData.activeDays.includes(day)) {
      return (
        <Row className="time-pickers">
          <Col>
            <Form.Group controlId="form--StartTime">
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale={intl.locale}
              >
                <Form.Label>
                  <FormattedMessage id="init-time" />
                </Form.Label>
                <TimePicker
                  value={offerData.activeTimes[day].start}
                  onChange={(newTime) => updatedActiveTimes(newTime, day, true)}
                />
              </LocalizationProvider>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="form--StartTime">
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale={intl.locale}
              >
                <Form.Label>
                  <FormattedMessage id="end-time" />
                </Form.Label>
                <TimePicker
                  value={offerData.activeTimes[day].end}
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

  return (
    <Form className="createOffer" onSubmit={createOffer}>
      <h1>
        <FormattedMessage id="new-offer" />
      </h1>
      <div className="form--items">
        <div className="form--OfferData">
          <Form.Group controlId="form--Price">
            <Form.Label>
              <FormattedMessage id="price" />
            </Form.Label>
            <CurrencyInput
              id="form--Price-Input"
              name="price"
              placeholder={intl.formatMessage({ id: "price-placeholder" })}
              decimalsLimit={0}
              prefix={"$"}
              value={offerData.price === 0 ? "" : offerData.price}
              // intlConfig={{
              //   locale: intl.locale,
              //   currency: intl.locale === "en" ? "USD" : "COP",
              // }}
              onValueChange={(value, _, values) =>
                handleInputChange("price", value)
              }
            />
          </Form.Group>
          <FormGroup controlId="form--OfferType">
            <Form.Label>
              <FormattedMessage id="offer-type" />
            </Form.Label>
            <Form.Select
              aria-label="form--OfferType-Input"
              onChange={(e) => {
                handleInputChange("offerType", e.target.value);
              }}
            >
              <option value={KANGAROO}>Canguro</option>
              <option value={GUARDIAN}>Acudiente</option>
            </Form.Select>
          </FormGroup>
          <div className="form--Dates">
            <Form.Group
              className="dates--StartDate"
              controlId="form--StartDate"
            >
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale={intl.locale}
              >
                <Form.Label>
                  <FormattedMessage id="init-date" />
                </Form.Label>
                <DatePicker
                  value={offerData.initDate}
                  onChange={(newInitDate) => {
                    handleInputChange("initDate", newInitDate);
                  }}
                />
              </LocalizationProvider>
            </Form.Group>
            <Form.Group className="dates--EndDate" controlId="form--EndDate">
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale={intl.locale}
              >
                <Form.Label>
                  <FormattedMessage id="end-date" />
                </Form.Label>
                <DatePicker
                  value={offerData.endDate}
                  onChange={(newEndDate) => {
                    handleInputChange("endDate", newEndDate);
                  }}
                />
              </LocalizationProvider>
            </Form.Group>
          </div>
        </div>

        <div className="form--ScheduleData">
          <Form.Group controlId="form--Schedule">
            <Form.Label>
              <FormattedMessage id="schedule" />
            </Form.Label>
            {WEEKDAYS.map((day) => {
              return (
                <Row>
                  <Form.Check
                    type="checkbox"
                    id={day}
                    value={day}
                    label={day}
                    onClick={showHourForDay}
                    defaultChecked={offerData.activeDays.includes(day)}
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
            <FormattedMessage id="cancel" />
          </Button>
        </div>
        <div className="offer-createBtn">
          <Button
            className="offer-createBtn"
            size="lg"
            type="submit"
            onClick={createOffer}
          >
            <FormattedMessage id="create-offer" />
          </Button>
        </div>
      </div>
      <div>{errorMsg && <p>{errorMsg}</p>}</div>
    </Form>
  );
}

export default OfertaCreate;

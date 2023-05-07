import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";
import CurrencyInput from "react-currency-input-field";
import { GUARDIAN, KANGAROO, WEEKDAYS } from "../../../helpers/constants";
import './OfertaCreate.css';

function OfertaCreate() {
  const [activeDays, setActiveDays] = useState([])

  const cancelOfferCreate = () => {
    console.log("canceling create...");
  };

  const createOffer = () => {
    console.log("creating offer...");
  };

  const showHourForDay = (event) => {
    const checkedDay = event.target.value;
    if (event.target.checked) {
      setActiveDays([...activeDays, checkedDay])
    } else {
      setActiveDays((prevDays) => prevDays.filter((day) => day !== checkedDay))
    }
  };

  const renderTime = (day) => {
    if(activeDays.includes(day)) {
      return (
        <Row className='time-pickers'>
        <Col>
        <Form.Group controlId='form--StartTime'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Form.Label>Hora Incio</Form.Label>
            <TimePicker
              value={dayjs('2022-04-17T15:30')}
            />
          </LocalizationProvider>
        </Form.Group>
        </Col>
        <Col>
        <Form.Group controlId='form--StartTime'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Form.Label>Hora Incio</Form.Label>
            <TimePicker
              value={dayjs('2022-04-17T15:30')}
            />
          </LocalizationProvider>
        </Form.Group>
        </Col>
        </Row>
      )
    }
  }

  return (
    <Form className='createOffer'>
        <h1>Nueva Oferta</h1>
      <Row>
        <Col className='form--OfferData'>
          <Form.Group controlId="form--Price">
            <Form.Label>Precio</Form.Label>
            <CurrencyInput
              id="form--Price-Input"
              name="input-price"
              placeholder="Ingresa el precio sin el signo de pesos ($)"
              decimalsLimit={0}
              prefix={'$'}
            />
          </Form.Group>
          <FormGroup controlId="form--OfferType">
            <Form.Label>Tipo de Oferta</Form.Label>
            <Form.Select aria-label="form--OfferType-Input">
              <option value={KANGAROO}>Canguro</option>
              <option value={GUARDIAN}>Acudiente</option>
            </Form.Select>
          </FormGroup>
          <Row>
            <Col>
              <Form.Group controlId="form--StartDate">
                <Form.Label>Fecha incial</Form.Label>
                <Form.Control type="date"></Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="form--EndDate">
                <Form.Label>Fecha final</Form.Label>
                <Form.Control type="date"></Form.Control>
              </Form.Group>
            </Col>
          </Row>
        </Col>

        <Col className='form--ScheduleData'>
          <Form.Group controlId="form--Schedule">
            <Form.Label>Horario</Form.Label>
            {WEEKDAYS.map((day) => {
              return (
                <Row>
                  <Form.Check type="checkbox" id={day} value={day} label={day} onClick={showHourForDay}/>
                  {renderTime(day)}
                </Row>
              );
            })}

          </Form.Group>
        </Col>
      </Row>
      
      <Row className='submitCancelBtns justify-content-md-center'>
        <Col className='offer-cancelBtn'size={6}>
        <Button className='offer-cancelBtn'size="lg" type="cancel" onClick={cancelOfferCreate}>Cancelar</Button>
        </Col>
        <Col className='offer-createBtn'size={6}>
        <Button className='offer-createBtn'size="lg" type="submit" onClick={createOffer}>Crear oferta</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default OfertaCreate;

import { useState } from 'react';
import { Button, Col, Form, Row } from "react-bootstrap";
import CurrencyInput from "react-currency-input-field";
import './ReseniaCreate.css';
import { buildReseniaPayload } from './ReseniaCreateHelper';


function ReseniaCreate() {

  const [titulo, setTitulo] = useState("")
  const [calificacion, setCalificacion] = useState({ kindOfStand: "", another: "another" });
  const [descripcion, setDescripcion] = useState("")
  const { kindOfStand } = calificacion;

  const handleChange = e => {
    e.persist();
    console.log(e.target.value);

    setCalificacion(prevState => ({
      ...prevState,
      kindOfStand: e.target.value
    }));
  };

  const cancelReseniaCreate = () => {
    console.log("canceling create...");
  };

  const createResenia = (event) => {
    event.preventDefault();
    console.log("creating resenia...");
    // validate data
    const resenia = {
      titulo: titulo, 
      calificacion: calificacion, 
      descripcion:  descripcion, 
    }
    // build payload
    console.log(buildReseniaPayload(resenia))

    // post offer
    console.log('sending post request')

  };

  return (
    <Form className="createResenia">
      <h1>Nueva Reseña</h1>
      <Row>
        <Col className="form--ReseniaData">

          <Form.Group controlId="form--Titulo">
            <Form.Label>Titulo</Form.Label>
            <CurrencyInput
              id="form--Titulo-Input"
              name="input-titulo"
              placeholder="Ingresa un titulo que describa tu opinion"
              onChange={(e) => setTitulo(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="form--Descripcion">
            <Form.Label>Descripcion</Form.Label>
            <CurrencyInput
              id="form--Descripcion-Input"
              name="input-Descripcion"
              placeholder="Ingresa la descripción de tu opinion"
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </Form.Group>

        </Col>

        <Col className="form-Calificacion">

          <Form.Group controlId="form-Calificacion">
            <Form.Label>Calificacion</Form.Label>
            {/*</Form.Group><>Califica tu experiencia, siendo 1 pésima y 5 excelente<>*/}
            <Form.Check
              value="1"
              type="radio"
              aria-label="radio 2"
              label="1"
              onChange={handleChange}
              checked={kindOfStand === "1"}
            />
            <Form.Check
              value="2"
              type="radio"
              aria-label="radio 2"
              label="2"
              onChange={handleChange}
              checked={kindOfStand === "2"}
            />
            <Form.Check
              value="3"
              type="radio"
              aria-label="radio 2"
              label="3"
              onChange={handleChange}
              checked={kindOfStand === "3"}
            />
            <Form.Check
              value="4"
              type="radio"
              aria-label="radio 2"
              label="4"
              onChange={handleChange}
              checked={kindOfStand === "4"}
            />
            <Form.Check
              value="5"
              type="radio"
              aria-label="radio 2"
              label="5"
              onChange={handleChange}
              checked={kindOfStand === "5"}
            />
          </Form.Group>

        </Col>
        
      </Row>

      <Row className="submitCancelBtns justify-content-md-center">
        <Col className="resenia-cancelBtn" size={6}>
          <Button
            className="resenia-cancelBtn"
            size="lg"
            type="cancel"
            onClick={cancelReseniaCreate}
          >
            Cancelar
          </Button>
        </Col>
        <Col className="resenia-createBtn" size={6}>
          <Button
            className="resenia-createBtn"
            size="lg"
            type="submit"
            onClick={createResenia}
          >
            Crear reseña
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default ReseniaCreate;
import { useState, useEffect } from 'react';
import { Button, Col, Form, Row } from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import './ReseniaCreate.css';
import { buildReseniaPayload } from './ReseniaCreateHelper';
import { BASE_URL } from "../../../helpers/constants";
import { FormattedMessage, useIntl } from "react-intl";


const token = localStorage.getItem("sessionToken");

async function postResenia(reseniaPayload) {
  const requestReseniaPayload = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(reseniaPayload),
  };
  console.log(requestReseniaPayload)
  return fetch(BASE_URL + "/resenias", requestReseniaPayload);
} 


function ReseniaCreate(props) {

  const intl = useIntl();
  const location = useLocation();
  const idReceptor = location.state.usuarioId;
  const [titulo, setTitulo] = useState("")
  const [calificacion, setCalificacion] = useState({ kindOfStand: "", another: "another" });
  const [descripcion, setDescripcion] = useState("")
  const { kindOfStand } = calificacion;
  const [errorMsg, setErrorMsg] = useState(null);
  const [reseniaData, setReseniaData] = useState({
    titulo: null,
    calificacion: null,
    descripcion: null,
    idReceptor: idReceptor,
  });
  
  
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

  useEffect(() => {
    if (!navigator.onLine) {
      console.log(
        "offline",
        JSON.parse(localStorage.getItem("resenia-form-data"))
      );
      if (localStorage.getItem("resenia-form-data") !== null) {
        const storedForm = JSON.parse(localStorage.getItem("resenia-form-data"));
        const storedResenia = {
          titulo: storedForm.titulo,
          calificacion: parseInt(storedForm.calificacion),
          descripcion: storedForm.descripcion,
          idReceptor: idReceptor

        };
        console.log('stored', storedResenia);
        setReseniaData(storedResenia);
      }
    }
  }, []);

  const handleInputChange = (name, value) => {
    setReseniaData({ ...reseniaData, [name]: value });
    localStorage.setItem("resenia-form-data", JSON.stringify(reseniaData));
    console.log(reseniaData);
  };

  const createResenia = async function (event) {
    event.preventDefault();
    console.log("creating resenia...");

    const resenia = {
      titulo: titulo, 
      calificacion: kindOfStand, 
      descripcion:  descripcion, 
      receptor: idReceptor,
    }

    const bodyPayload = buildReseniaPayload(resenia);
    if (!bodyPayload) {
      console.log("invalid user");
    } else {
      console.log("sending post request");
      const resenia = await postResenia(bodyPayload)
      .then(res => res.json());

      if (!resenia) {
            setErrorMsg("Error creating schedule");
          } else {
            alert("Offer created successfully");
          }
      
    }

  };

  return (
    <Form className="createResenia">
      <h1><FormattedMessage id="new-resenia" /></h1>
      <Row>
        <Col className="form--ReseniaData">

          <Form.Group controlId="form--Titulo">
            <Form.Label><FormattedMessage id="title" /></Form.Label>
              <Form.Control
                id="form--Titulo-Input"
                name="input-titulo"
                placeholder={intl.formatMessage({ id: "title-placeholder" })}
                onValueChange={(value, _, values) =>
                  handleInputChange("titulo", value)
                }
              />
          </Form.Group>

          <Form.Group controlId="form--Descripcion">
            <Form.Label><FormattedMessage id="description" /></Form.Label>
            <Form.Control
              id="form--Descripcion-Input"
              name="input-Descripcion"
              placeholder={intl.formatMessage({ id: "description-placeholder" })}
              onValueChange={(value, _, values) =>
                handleInputChange("descripcion", value)
                }
            />
          </Form.Group>

        </Col>

        <Col className="form-Calificacion">

          <Form.Group>
            <Form.Label className='form-label padding-left: 50em' ><FormattedMessage id="score" /></Form.Label>
            <Form.Check className='form-check'
              value="1"
              type="radio"
              aria-label="radio 2"
              label="1"
              onChange={handleChange}
              checked={kindOfStand === "1"}
            />
            <Form.Check className='form-check'
              value="2"
              type="radio"
              aria-label="radio 2"
              label="2"
              onChange={handleChange}
              checked={kindOfStand === "2"}
            />
            <Form.Check className='form-check'
              value="3"
              type="radio"
              aria-label="radio 2"
              label="3"
              onChange={handleChange}
              checked={kindOfStand === "3"}
            />
            <Form.Check className='form-check'
              value="4"
              type="radio"
              aria-label="radio 2"
              label="4"
              onChange={handleChange}
              checked={kindOfStand === "4"}
            />
            <Form.Check className='form-check'
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
            <FormattedMessage id="cancel" />
          </Button>
        </Col>
        <Col className="resenia-createBtn" size={6}>
          <Button
            className="resenia-createBtn"
            size="lg"
            type="submit"
            onClick={createResenia}
          >
            <FormattedMessage id="create-resenia" />
          </Button>
        </Col>
      </Row>
      <div>{errorMsg && <p>{errorMsg}</p>}</div>
    </Form>
  );
}

export default ReseniaCreate;
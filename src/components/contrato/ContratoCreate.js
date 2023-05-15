import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Col, Container, Row, Image, Form } from "react-bootstrap";
import "./ContratoCreate.css";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useState } from 'react';

function ContratoCreate(){
    const [initDate, setInitDate] = useState(dayjs())
    return (
        <Container className="mid">
            <h1 className="title">Nuevo Contrato</h1>
            <Form className="formulario" title="Información de la oferta">
                <Row>
                    <Col xs={6}>
                        <Form.Group controlId="form--date">
                        <Form.Label>Fecha *</Form.Label>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                
                                <DatePicker
                                    value={initDate}
                                    onChange={(newInitDate) => setInitDate(newInitDate)}
                                />
                            </LocalizationProvider>
                        </Form.Group>
                        <Form.Group controlId="form--kangname">
                            <Form.Label>Nombre del Canguro *</Form.Label>
                            <Form.Control placeholder="Ingresa el nombre del canguro al que se asociara el contrato" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Oferta del canguro asociada *</Form.Label>
                            <Form.Select
                                    aria-label="form--OfferSelect"
                                    onChange={(e) => console.log("Oferta seleccionada")}
                            >
                                <option value="Oferta1">Oferta1</option>
                                <option value="Oferta2">Oferta2</option>
                                <option value="Oferta3">Oferta3</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col xs={6} className="landing-foto">
                        <Row>
                            <Image className="foto" src="https://cdn.discordapp.com/attachments/260148962948808705/1106280407130980453/Imagen2LandingPage.png"/>
                        </Row>
                        <Row>
                            <Col className='center'>
                                <button className="btn-t2" type="button">Remover</button>
                                <button className="btn-t1" type="button">Crear contrato</button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Form>
        </Container>
    );

}

export default ContratoCreate;
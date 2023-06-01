import { Col, Container, Row, Image, Button } from "react-bootstrap";
import "./ContratoDetail.css"

function ContratoDetail(){
    return (
        <Container className="mid">
            <Row className="detailContrato">
                <Col xs={7}>
                    <Row>
                        <h1 className="title no-margin">Juan Roberto Robles</h1> 
                    </Row>
                    <Row>
                        <Col xs={3} className="no-margin">Acudiente</Col>
                    </Row>                
                    <Row className="margin">
                        <ul>
                            <lh>Precio por dia del contrato</lh>
                            <li>COP $55.000</li>
                        </ul>
                        <ul>
                            <lh>Horario</lh>
                            <li>Lunes a viernes de 7:30am a 4:30pm</li>
                        </ul>
                        <ul>
                            <lh>Fecha de creacion del contrato</lh>
                            <li>No tiene</li>
                        </ul>
                        <ul>
                            <lh>Inactivo</lh>
                        </ul>
                    </Row>
                </Col>
                <Col xs={5} className="center-img">
                    <Container className="foto">
                        <Image className="no-margin" src="https://cdn.discordapp.com/attachments/260148962948808705/1106205765582196897/Acudiente2.jpeg" roundedCircle fluid/>
                    </Container>
                </Col>
            </Row>
            <Row>
                <Col xs={8}>
                    <button className="my-btn" type="button">Atrás</button>
                </Col>
            </Row>
        </Container>
    );
}
export default ContratoDetail;
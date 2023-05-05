import { Col, Row } from "react-bootstrap";
import "./UsuarioDetail.css"

function UsuarioDetail() {

    return (
        <Row className="detailUsuario">
            <Col className="no-margin">
                <Row>
                    <h1 className="title no-margin">Valerie Robertson</h1> 
                </Row>
                <Row>
                    <Col>Canguro</Col>
                    <Col>2 años de experiencia</Col>
                </Row>                
                <Row>
                    <ul>
                        <lh>Habilidades</lh>
                        <li>Creatividad</li>
                        <li>Comunicación efectiva</li>
                        <li>Certificación en primeros auxilios y RCP</li>
                    </ul>
                    <ul>
                        <lh>Métodos de Contacto</lh>
                        <li>Correo:  v.robertson@gmail.com</li>
                        <li>Celular:  3012455675</li>
                    </ul>
                    <ul>
                        <lh>Antecedentes</lh>
                        <li>No tiene</li>
                    </ul>
                </Row>
            </Col>
            <Col>
            
            </Col>
        </Row>
    );
}

export default UsuarioDetail;
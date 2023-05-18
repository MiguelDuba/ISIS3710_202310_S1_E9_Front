import { Col, Container, Row, Image, Button } from "react-bootstrap";
import "./UsuarioDetail.css"
import { useParams } from "react-router-dom";

function UsuarioDetail() {
    const params = useParams();

    return (
        <Container className="mid">
            {params.usuarioId}
            <Row className="detailUsuario">
                <Col xs={4}>
                    <Row>
                        <h1 className="title no-margin">Valerie Robertson</h1> 
                    </Row>
                    <Row>
                        <Col xs={3} className="no-margin">Canguro</Col>
                        <Col xs={6} className="no-margin right left-padding bold">2 años de experiencia</Col>
                    </Row>                
                    <Row className="margin">
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
                <Col xs={4} className="center-img">
                    <Container className="foto">
                        <Image className="no-margin" src="https://media.discordapp.net/attachments/1040862459378020502/1104211558386651136/sacramento_professional_headshot_tips-1-2048x1699.jpg?width=809&height=671" roundedCircle fluid/>
                    </Container>
                </Col>
            </Row>
            <Row>
                <Col xs={8}>
                    <button className="my-btn" type="button">Ver Ofertas</button>
                    <button className="my-btn" type="button">Ver Reseñas</button>
                </Col>
            </Row>
        </Container>
    );
}

export default UsuarioDetail;
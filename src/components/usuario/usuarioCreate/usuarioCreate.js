import { Row, Col, Container, Form, Image } from 'react-bootstrap';
import "./usuarioCreate.css"

function UsuarioCreate(props) {
    return (
        <Container className="mid">
            <h1 className="title">Crea tu Cuenta</h1>
            <Form className="formulario" title="Información Personal:">
                <Row>
                    <Col xs={6}>
                        <h2 className="subtitle">Información Personal:</h2>
                        <Form.Group className="mb-3">
                            <Form.Label>Nombre *</Form.Label>
                            <Form.Control placeholder="Ingresa tu nombre completo" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Cedula *</Form.Label>
                            <Form.Control placeholder="Ingresa tu número de cedula" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Celular *</Form.Label>
                            <Form.Control placeholder="Ingresa tu número de celular" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Correo Electrónico</Form.Label>
                            <Form.Control placeholder="Ingresa tu correo electrónico" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Dirección *</Form.Label>
                            <Form.Control placeholder="Ingresa tu dirección de residencia" />
                        </Form.Group>
                        <h2 className="subtitle">Configurar Cuenta:</h2>
                        <Form.Group className="mb-3">
                            <Form.Label>Tipo de Cuenta *</Form.Label>
                            <Form.Control placeholder="Ingresa tu número de cedula" />
                        </Form.Group>
                    </Col>
                    <Col xs={6} className="add-foto">
                        <h2 className="subtitle center">Foto de Perfil</h2>
                        <Row>
                            <Image className="foto" src="https://media.discordapp.net/attachments/1040862459378020502/1104408884539555970/image_1.png"/>
                        </Row>
                        <Row>
                            <Col className='center'>
                                <button className="btn-t2" type="button">Remover</button>
                                <button className="btn-t1" type="button">Agregar</button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Contraseña *</Form.Label>
                            <Form.Control type="password" placeholder="Ingresa tu contraseña de acceso a tu cuenta" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Verificar Contraseña *</Form.Label>
                            <Form.Control type="password" placeholder="Ingresa nuevamente la contraseña de acceso a tu cuenta" />
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default UsuarioCreate;
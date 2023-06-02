import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import "./createAccount.css"

function CreateAccount(props) {
    return (
        <Container className="mid">
            <h1 className="title">Crea tu Cuenta</h1>
            <h2 className="subtitle-1">¡Crea una cuenta para disfrutar de todos los servicios de forma gratuita!</h2>
            <Form className="formulario" title="Información Personal:">
                <Row>
                    <Col>
                        <Form.Group className="mb-3 subtitle">
                            <Form.Label>Nombre Completo *</Form.Label>
                            <Form.Control placeholder="Ingresa tu nombre completo" />
                        </Form.Group>
                        <Form.Group className="mb-3 subtitle">
                            <Form.Label>Número de cedula *</Form.Label>
                            <Form.Control placeholder="Ingresa tu número de cedula" />
                        </Form.Group>
                        <Form.Group className="mb-3 subtitle">
                            <Form.Label>Dirección *</Form.Label>
                            <Form.Control placeholder="Ingresa tu dirección" />
                        </Form.Group>
                        <Form.Group className="mb-3 subtitle">
                            <Form.Label>Celular *</Form.Label>
                            <Form.Control placeholder="Ingresa tu número de celular" />
                        </Form.Group>
                        <Form.Group className="mb-3 subtitle">
                            <Form.Label>Rol *</Form.Label>
                            <Form.Select label="Default select example">
                                <option>Ingresa tu rol</option>
                                <option value="1">Canguro</option>
                                <option value="2">Acudiente</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3 subtitle">
                            <Form.Label>Contraseña *</Form.Label>
                            <Form.Control type="password" placeholder="Ingresa tu contraseña de acceso a tu cuenta" />
                        </Form.Group>
                        <Form.Group className="mb-3 subtitle">
                            <Form.Label>Confirmar Contraseña *</Form.Label>
                            <Form.Control type="password" placeholder="Ingresa nuevamente la contraseña" />
                        </Form.Group>
                        <Button className='btn-t1'>
                            Crear Una Cuenta
                        </Button>
                    </Col>
                    <h2 className="subtitle-1">¿Ya tienes una cuenta? Sign In</h2>
                </Row>
            </Form>
        </Container>
    );
}

export default CreateAccount;
import { Row, Col, Container, Form, Image, Button } from 'react-bootstrap';
import { getToken, getUserByEmail } from '../../../helpers/backend/backend';
import { BASE_URL } from "../../../helpers/constants";
import { useState } from "react";
import "./usuarioCreate.css"

function UsuarioCreate() {

    // State to store the form data
    const [formData, setFormData] = useState({
        nombre: '',
        cedula: '',
        contrasenia: '',
        verContrasenia: '',
        correoElectronico: '',
        direccion: '',
        celular: '',
        tipoUsuario: '',
        aniosExperiencia: 0,
        foto: 'https://media.discordapp.net/attachments/1040862459378020502/1104408884539555970/image_1.png',
    });

    const [error, setError] = useState();

    // Function to create a new usuario in the backend
    async function createUsuario() {
        console.log("Creando usuario...");
        // Create the request
        const requestCreateUsuario = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        };
        // Frontend validation
        if(formData["contrasenia"] !== formData["verContrasenia"]) {
            setError("Las contraseñas no coinciden")
            return;
        }
        // Send the request
        return fetch(BASE_URL + "/usuarios", requestCreateUsuario).then(async (response) => {
            const token = await getToken({
                email: formData["correoElectronico"], 
                password: formData["contrasenia"], 
                roles: "registeredUser"
            })
            localStorage.setItem('sessionToken', token.token)
            const userData = await getUserByEmail(formData["correoElectronico"])
            if (!userData) {
                console.log('error while getting user data (no token)')
            }
            else {
                localStorage.setItem('userData', JSON.stringify(userData))
                console.log(JSON.stringify(userData))
                window.location.href = '/';
            }
        })
    }

    // Function to handle when the any input of the form changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Function to handle when the form is submitted
    const handleSubmit = (e) => {
        e.preventDefault();
        createUsuario();
    };

    // Function to handle when an image is cant be shown
    const handleImageError = (event) => {
        event.target.src = './icons/user.png';
    };

    return (
        <Container className='usuario--create'>
            <Row className='usuario--title'>
                <h1 className="title">Crea tu Cuenta</h1>
            </Row>
            <Form className="formulario" title="Crea tu cuenta" onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <h2 className="subtitle mb-3">Información Personal:</h2>
                        <Form.Group className="mb-3" controlId="nombre">
                            <Form.Label>Nombre *</Form.Label>
                            <Form.Control placeholder="Ingresa tu nombre completo" name="nombre" onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="cedula" >
                            <Form.Label>Cedula *</Form.Label>
                            <Form.Control placeholder="Ingresa tu número de cedula" type="number" name="cedula" onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="celular" >
                            <Form.Label>Celular *</Form.Label>
                            <Form.Control placeholder="Ingresa tu número de celular" type="number" name="celular" onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="correoElectronico">
                            <Form.Label>Correo Electrónico</Form.Label>
                            <Form.Control placeholder="Ingresa tu correo electrónico" name="correoElectronico" type="email" onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="direccion">
                            <Form.Label>Dirección *</Form.Label>
                            <Form.Control placeholder="Ingresa tu dirección de residencia" name="direccion" onChange={handleInputChange} required />
                        </Form.Group>
                        <h2 className="subtitle mb-3">Configurar Cuenta:</h2>
                        <Form.Group className="mb-3">
                            <Form.Label>Tipo de Cuenta *</Form.Label>
                            <Form.Select label="Default select" name="tipoUsuario" onChange={handleInputChange} required >
                                <option>Ingresa tu rol</option>
                                <option value="canguro">Canguro</option>
                                <option value="acudiente">Acudiente</option>
                                <option value="ambos">Canguro y Acudiente</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Row className="add-foto">
                            <h2 className="subtitle center">Foto de Perfil</h2>
                            <Image className="foto" src={formData['foto']} onError={handleImageError}required />
                            <Form.Group className="mb-3" controlId="enlace">
                                <Form.Label>Enlace Foto de Peril*</Form.Label>
                                <Form.Control className="text-center" placeholder="Ingresa el enlace de la imagen" type="url" name="foto" onChange={handleInputChange} required />
                            </Form.Group>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="contrasenia">
                            <Form.Label>Contraseña *</Form.Label>
                            <Form.Control type="password" placeholder="Ingresa tu contraseña de acceso a tu cuenta" name="contrasenia" onChange={handleInputChange} required />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="verContrasenia">
                            <Form.Label>Verificar Contraseña *</Form.Label>
                            <Form.Control type="password" placeholder="Ingresa nuevamente la contraseña de acceso" name="verContrasenia" onChange={handleInputChange} required />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="error">
                    {error}
                </Row>
                <Row className="center">
                    <Button className="btn-t2 big" type="button" >Cancelar</Button>
                    <Button className="btn-t1 big" type="submit" >Crear Cuenta</Button>
                </Row>
            </Form>
        </Container>
    );
}

export default UsuarioCreate;
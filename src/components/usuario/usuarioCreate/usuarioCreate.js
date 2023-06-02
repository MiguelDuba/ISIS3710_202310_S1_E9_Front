import { Row, Col, Container, Form, Image, Button } from 'react-bootstrap';
import { getToken, getUserByEmail } from '../../../helpers/backend/backend';
import { BASE_URL } from "../../../helpers/constants";
import { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import "./usuarioCreate.css"

function UsuarioCreate() {
    const intl = useIntl();

    // Placeholders for the form data
    const phName = intl.formatMessage({ id: 'placeholder-name' });
    const phId = intl.formatMessage({ id: 'placeholder-id' });
    const phPhone = intl.formatMessage({ id: 'placeholder-phone' });
    const phEmail = intl.formatMessage({ id: 'placeholder-email' });
    const phAddress = intl.formatMessage({ id: 'placeholder-address' });
    const phPassword = intl.formatMessage({ id: 'placeholder-password' });
    const phVerPassword = intl.formatMessage({ id: 'placeholder-confirm' });
    const phPicture = intl.formatMessage({ id: 'placeholder-picture' });
    const tForm = intl.formatMessage({ id: 'create-user' });
    const txtError1 = intl.formatMessage({ id: 'no-matching-passwords' });
    const txtError2 = intl.formatMessage({ id: 'invalid-email' });
    const txtError3 = intl.formatMessage({ id: 'invalid-role' });
    const txtProfilePicture = intl.formatMessage({ id: 'profile-picture' });

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
            setError(txtError1)
            return;
        }
        if(formData["tipoUsuario"] === "select" || formData["tipoUsuario"] === "") {
            setError(txtError3)
            return;
        }
        // Send the request
        return fetch(BASE_URL + "/usuarios", requestCreateUsuario).then(async (response) => {
            // Backend validation
            if (response.status === 412) {
                setError(txtError2);
                return;
            }
            // Automatic login process
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
        });
    }

    // Function to handle when the any input of the form changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Function to handle when the form is submitted
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        createUsuario();
    };

    // Function to handle when an image is cant be shown
    const handleImageError = (event) => {
        event.target.src = './icons/user.png';
    };

    return (
        <Container className='usuario--create'>
            <Row className='usuario--title'>
                <h1 className="title"><FormattedMessage id="create-user"/></h1>
            </Row>
            <Form className="formulario" title={tForm} onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <h2 className="subtitle mb-3"><FormattedMessage id="personal-info"/>:</h2>
                        <Form.Group className="mb-3" controlId="nombre">
                            <Form.Label><FormattedMessage id="name"/> *</Form.Label>
                            <Form.Control placeholder={phName} name="nombre" onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="cedula" >
                            <Form.Label><FormattedMessage id="id-number"/> *</Form.Label>
                            <Form.Control placeholder={phId} type="number" name="cedula" onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="celular" >
                            <Form.Label><FormattedMessage id="phone"/> *</Form.Label>
                            <Form.Control placeholder={phPhone} type="number" name="celular" onChange={handleInputChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="correoElectronico">
                            <Form.Label><FormattedMessage id="email"/> *</Form.Label>
                            <Form.Control placeholder={phEmail} name="correoElectronico" type="email" onChange={handleInputChange} required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="direccion">
                            <Form.Label><FormattedMessage id="address"/> *</Form.Label>
                            <Form.Control placeholder={phAddress} name="direccion" onChange={handleInputChange} required />
                        </Form.Group>
                        <h2 className="subtitle mb-3"><FormattedMessage id="account-config"/>:</h2>
                        <Form.Group className="mb-3">
                            <Form.Label><FormattedMessage id="account-type"/> *</Form.Label>
                            <Form.Select label="Default select" name="tipoUsuario" onChange={handleInputChange} required >
                                <option value="select" ><FormattedMessage id="enter-role"/></option>
                                <option value="canguro"><FormattedMessage id="kangaroo"/></option>
                                <option value="acudiente"><FormattedMessage id="guardian"/></option>
                                <option value="ambos"><FormattedMessage id="both-roles"/></option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Row className="add-foto">
                            <h2 className="subtitle center"><FormattedMessage id="profile-picture"/></h2>
                            <Image className="foto" src={formData['foto']} alt={`${txtProfilePicture} ${formData["nombre"]}`} onError={handleImageError}required />
                            <Form.Group className="mb-3 center" controlId="enlace">
                                <Form.Label><FormattedMessage id="picture-link"/> *</Form.Label>
                                <Form.Control className="text-center" placeholder={phPicture} type="url" name="foto" onChange={handleInputChange} required />
                            </Form.Group>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="contrasenia">
                            <Form.Label><FormattedMessage id="password"/> *</Form.Label>
                            <Form.Control type="password" placeholder={phPassword} name="contrasenia" onChange={handleInputChange} required />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="verContrasenia">
                            <Form.Label><FormattedMessage id="confirm-password"/> *</Form.Label>
                            <Form.Control type="password" placeholder={phVerPassword} name="verContrasenia" onChange={handleInputChange} required />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="error">
                    {error}
                </Row>
                <Row className="center">
                    <Button className="btn-t2 big" type="button" ><FormattedMessage id="cancel"/></Button>
                    <Button className="btn-t1 big" type="submit" ><FormattedMessage id="create-account"/></Button>
                </Row>
            </Form>
        </Container>
    );
}

export default UsuarioCreate;
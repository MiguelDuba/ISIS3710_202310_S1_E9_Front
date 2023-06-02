import { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getUsuarioById } from "../../../helpers/backend/usuarioBackend";
import { FormattedMessage, useIntl } from "react-intl";
import "./UsuarioDetail.css";

function UsuarioDetail() {
    const navigate = useNavigate();
    const intl = useIntl();

    const txtExperience = intl.formatMessage({ id: 'experience' });
    const txtProfilePicture = intl.formatMessage({ id: 'profile-picture' });

    const params = useParams();
    const token = localStorage.getItem("sessionToken");
    const [usuario, setUsuario] = useState();
    const [titulo, setTitulo] = useState();
    const [experiencia, setExperiencia] = useState();
    const [habilidades, setHabilidades] = useState();
    const [antecedentes, setAntecedentes] = useState();
    const [isCanguro, setIsCanguro] = useState(null);
    const [btnStatus, setBtnStatus] = useState(false);

    const usuarioId = params.usuarioId;
    
    useEffect(
        () => {
            // Get of the user with the given id
            getUsuarioById(usuarioId).then((newUsuario) => {
                // If inexistent user, redirect to error page        
                setUsuario(newUsuario);
                if(isCanguro === null) {
                    setIsCanguro(newUsuario.tipoUsuario.toLowerCase() !== "canguro");
                }
                if(newUsuario.antecedentes.length === 0) {
                    setAntecedentes(<li><FormattedMessage id="no-legal-background"/></li>)
                } else {
                    setAntecedentes(newUsuario.antecedentes.map((ant) => <li>{ant.tipo}</li>))
                }
                if(isCanguro) {
                    setTitulo(<h2><FormattedMessage id="abilities"/>:</h2>)
                    setExperiencia(newUsuario.aniosExperiencia + " " + txtExperience)
                    if (newUsuario.especialidades.length === 0) {
                        setHabilidades(<li><FormattedMessage id="no-abilities"/></li>)
                    } else {
                        setHabilidades(newUsuario.especialidades.map((nec) => <li>{nec.tipo}</li>))
                    }
                    setTitulo(<h2><FormattedMessage id="abilities"/>:</h2>)
                } else {
                    setTitulo(<h2><FormattedMessage id="needs"/>:</h2>)
                    setExperiencia("")
                    if (newUsuario.necesidades.length === 0) {
                        setHabilidades(<li><FormattedMessage id="no-needs"/></li>)
                    } else {
                        setHabilidades(newUsuario.necesidades.map((nec) => <li>{nec.tipo}</li>))
                    }
                }
                if(newUsuario.tipoUsuario.toLowerCase() !== "ambos") {
                    setBtnStatus(true)
                }
            });
        }, [usuarioId, isCanguro]
    );

    if (!token) {
        // return <Navigate to="/error"></Navigate>;
    }

    const changeBtnStatus = (tipo) => {
        console.log(tipo, isCanguro)
        if(tipo === isCanguro) {
            setIsCanguro(!isCanguro);
        }
    };

    const seeOfertas = () => {
        navigate(`/usuario/${usuarioId}/ofertas`);
    };
    
    const seeResenias = () => {
        navigate('/resenias/user', { state: { usuarioId } });
    };

    const addResenia = () => {
        navigate('/resenias/new', { state: { usuarioId } });
    };

    if (usuario) {
        return (
            <Container className="usuario--detalle">
                <Row className="center">
                    <Button className="btn-t2 small" type="button" disabled={btnStatus} onClick={() => changeBtnStatus(true)}><FormattedMessage id="kangaroo"/></Button>
                    <Button className="btn-t2 small" type="button" disabled={btnStatus} onClick={() => changeBtnStatus(false)}><FormattedMessage id="guardian"/></Button>
                </Row>
                <Row className="lr-margin">
                    <Col className="info">
                        <Row>
                            <h1 className="usuario--nombre">{usuario.nombre}</h1>
                        </Row>
                        <Row>
                            <Col className="usuario--tipo" xs={2}>
                                <FormattedMessage id={usuario.tipoUsuario}/>
                            </Col>
                            <Col className="usuario--exp">
                                {experiencia}
                            </Col>
                        </Row>
                        {titulo}
                        <ul>
                            {habilidades}
                        </ul>
                        <h2><FormattedMessage id="contact-methods"/>:</h2>
                        <ul>
                            <li> <FormattedMessage id="email"/>: {usuario.correoElectronico} </li>
                            <li> <FormattedMessage id="phone"/>: {usuario.celular} </li>
                        </ul>
                        <h2><FormattedMessage id="legal-background"/>:</h2>
                        <ul>
                            {antecedentes}
                        </ul>
                    </Col>
                    <Col>
                        <Row className="add-foto">
                            <Image className="foto" alt={`${txtProfilePicture} ${usuario.nombre}`} src={usuario.foto} />
                        </Row>
                    </Col>
                </Row>
                <Row className="center">
                    <Button className="btn-t1 big" type="button" onClick={seeOfertas}><FormattedMessage id="view-offers"/></Button>
                    <Button className="btn-t2 big" type="button" onClick={addResenia}><FormattedMessage id="add-review"/></Button>
                    <Button className="btn-t1 big" type="button" onClick={seeResenias}><FormattedMessage id="view-reviews"/></Button>
                </Row>
            </Container> 
        );
    }   
}

export default UsuarioDetail;
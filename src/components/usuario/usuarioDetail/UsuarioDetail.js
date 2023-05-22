import { Col, Container, Row, Image, Button } from "react-bootstrap";
import "./UsuarioDetail.css"
import { Link, Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUsuarioById } from "../../../helpers/backend/usuarioBackend";

function UsuarioDetail() {
    const params = useParams();
    const token = localStorage.getItem("sessionToken");
    const [usuario, setUsuario] = useState();
    const [titulo, setTitulo] = useState();
    const [habilidades, setHabilidades] = useState();
    const [antecedentes, setAntecedentes] = useState();
    const [isCanguro, setIsCanguro] = useState(true);

    const usuarioId = params.usuarioId;
    const tipoUsuario = params.tipo;

    useEffect(
        () =>
        async function () {
            const newUsuario = await getUsuarioById(usuarioId);
            console.log(newUsuario)
            setUsuario(newUsuario);
            if(newUsuario.antecedentes.length === 0) {
                setAntecedentes(<li>El usuario no tiene antecedentes</li>)
            } else {
                setAntecedentes(newUsuario.antecedentes.map((ant) => <li>{ant.tipo}</li>))
            }
            if((newUsuario.tipoUsuario.toLowerCase() === "canguro" || newUsuario.tipoUsuario.toLowerCase() === "ambos")  && tipoUsuario.toLowerCase() === "canguro") {
                console.log("NO")
                setIsCanguro(true);
                setTitulo(<h2>Especialidades:</h2>)
                if (newUsuario.necesidades.length === 0) {
                    setHabilidades(<li>El acudiente no tiene necesidades</li>)
                } else {
                    setHabilidades(newUsuario.necesidades.map((nec) => <li>{nec.tipo}</li>))
                }
            } else if ((newUsuario.tipoUsuario.toLowerCase() === "acudiente" || newUsuario.tipoUsuario.toLowerCase() === "ambos")  && tipoUsuario.toLowerCase() === "acudiente") {
                console.log("NO")
                setIsCanguro(false);
                setTitulo(<h2>Necesidades:</h2>)
                if (newUsuario.necesidades.length === 0) {
                    setHabilidades(<li>El acudiente no tiene necesidades</li>)
                } else {
                    setHabilidades(newUsuario.necesidades.map((nec) => <li>{nec.tipo}</li>))
                }
            } else {
                window.location.href = '/error';
            }
        },
        [usuarioId,tipoUsuario]
    );

    if (!token) {
        return <Navigate to="/error"></Navigate>;
    }

    const changeIsCanguro = () => {
        console.log(isCanguro)
        if (isCanguro) {
            window.location.href = "/usuarios/" + usuarioId + "/Acudiente";
        } else {
            window.location.href = "/usuarios/" + usuarioId + "/Canguro";
        }
        setIsCanguro(!isCanguro);
    };

    if (usuario) {
        return (
            <Container className="mid">
                <Row className="justify-content-md-center down">
                    <Button className="change" type="button" disabled={isCanguro} onClick={changeIsCanguro}>Canguro</Button>
                    <Button className="change" type="button" disabled={!isCanguro} onClick={changeIsCanguro}>Acudiente</Button>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs={4}>
                        <Row>
                            <Row className="left">
                                <h1 className="title no-margin">{usuario.nombre}</h1> 
                            </Row>
                            <span>{tipoUsuario}</span>
                            <span className="bold">{usuario.aniosExperiencia} años de experiencia</span>
                        </Row>
                        <Row className="left">
                            {titulo}
                            <ul>
                                {habilidades}
                            </ul>
                            <h2>Métodos de Contacto:</h2>
                            <ul>
                                <li> Correo: {usuario.correoElectronico} </li>
                                <li> Celular: {usuario.celular} </li>
                            </ul>
                            <h2>Antecedentes:</h2>
                            <ul className="list-group">
                                {antecedentes}
                            </ul>
                        </Row>
                    </Col>
                    <Col xs={4} className="add-foto cent">
                        <Row>
                            <Image className="fotoCreate" src={usuario.foto} />
                        </Row>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Button className="big-btn" type="button">Ver Ofertas</Button>
                    <Button className="big-btn" type="button">Ver Reseñas</Button>
                </Row>
            </Container> 
        );
    }   
}

export default UsuarioDetail;
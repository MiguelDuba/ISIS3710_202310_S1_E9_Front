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
    const [isCanguro, setIsCanguro] = useState();

    const usuarioId = params.usuarioId;
    const tipoUsuario = params.tipo;

    useEffect(
        () =>
        async function () {
            const newUsuario = await getUsuarioById(usuarioId);
            setUsuario(newUsuario);
            if(newUsuario.antecedentes.length === 0) {
                setAntecedentes(<li>El usuario no tiene antecedentes</li>)
            } else {
                setAntecedentes(newUsuario.antecedentes.map((ant) => <li>{ant.tipo}</li>))
            }
            if((newUsuario.tipoUsuario.toLowerCase() === "canguro" || newUsuario.tipoUsuario.toLowerCase() === "ambos")  && tipoUsuario.toLowerCase() === "canguro") {
                setIsCanguro(true);
                setTitulo(<h2>Especialidades:</h2>)
                if (newUsuario.especialidades.length === 0) {
                    setHabilidades(<li>El canguro no tiene especialidades</li>)
                } else {
                    setHabilidades(newUsuario.especialidades.map((esp) => <li>{esp.tipo}</li>))
                }
            } else if ((newUsuario.tipoUsuario.toLowerCase() === "acudiente" || newUsuario.tipoUsuario.toLowerCase() === "ambos")  && tipoUsuario.toLowerCase() === "acudiente") {
                setIsCanguro(false);
                setTitulo(<h2>Necesidades:</h2>)
                if (newUsuario.necesidades.length === 0) {
                    setHabilidades(<li>El acudiente no tiene necesidades</li>)
                } else {
                    setHabilidades(newUsuario.necesidades.map((nec) => <li>{nec.tipo}</li>))
                }
            } else {
                //Deberia llevar a la pg de error
            }
            console.log("offer set", newUsuario);
        },
        [usuarioId,tipoUsuario]
    );

    if (!token) {
        return <Navigate to="/error"></Navigate>;
    }

    const changeIsCanguro = () => {
        setIsCanguro(!isCanguro);
    };

    if (usuario) {
        return (
            <Container className="mid">
                <Row className="d-flex justify-content-end">
                    <Link className="change" to={"/usuarios/" + usuarioId + "/Canguro"}><Button type="button" disabled={!isCanguro} onClick={changeIsCanguro}>Canguro</Button></Link>
                    <Link className="change" to={"/usuarios/" + usuarioId + "/Acudiente"}><Button type="button" disabled={isCanguro} onClick={changeIsCanguro}>Acudiente</Button></Link>
                </Row>
                <Row className="justify-content-md-center detailUsuario">
                    <Col xs={4}>
                        <Row>
                            <h1 className="title no-margin">Valerie Robertson</h1> 
                        </Row>
                        <Row>
                            <Col className="no-margin">Canguro</Col>
                            <Col className="no-margin right left-padding bold">2 años de experiencia</Col>
                        </Row>                
                        <Row className="margin">
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
                    <Col xs={4} className="add-foto">
                        <Row>
                            <Image className="foto" src={usuario.foto}/>
                        </Row>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs={8}>
                        <Button className="my-btn" type="button">Ver Ofertas</Button>
                        <Button className="my-btn" type="button">Ver Reseñas</Button>
                    </Col>
                </Row>
            </Container>
        );
    }   
}

export default UsuarioDetail;
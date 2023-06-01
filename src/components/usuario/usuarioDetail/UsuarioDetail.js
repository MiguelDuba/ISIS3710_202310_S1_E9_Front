import { Col, Container, Row, Image, Button } from "react-bootstrap";
import "./UsuarioDetail.css"
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUsuarioById } from "../../../helpers/backend/usuarioBackend";

function UsuarioDetail() {
    const navigate = useNavigate();

    const params = useParams();
    const token = localStorage.getItem("sessionToken");
    const [usuario, setUsuario] = useState();
    const [titulo, setTitulo] = useState();
    const [experiencia, setExperiencia] = useState();
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
        // return <Navigate to="/error"></Navigate>;
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

    const seeOfertas = () => {
        console.log('Button 3 clicked');
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
                <Row className="lr-margin">
                    <Col className="info">
                        <Row>
                            <h1 className="usuario--nombre">{usuario.nombre}</h1>
                        </Row>
                        <Row>
                            <Col className="usuario--tipo" xs={2}>
                                {usuario.tipoUsuario}
                            </Col>
                            <Col className="usuario--exp">
                                {experiencia} 2 años de experiencia
                            </Col>
                        </Row>
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
                        <ul>
                            {antecedentes}
                        </ul>
                    </Col>
                    <Col>
                        <Row className="add-foto">
                            <Image className="foto" src={usuario.foto} />
                        </Row>
                    </Col>
                </Row>
                <Row className="center">
                    <Button className="btn-t1 big" type="button" onClick={seeOfertas}>Ver Ofertas</Button>
                    <Button className="btn-t2 big" type="button" onClick={addResenia}>Añadir Reseña</Button>
                    <Button className="btn-t1 big" type="button" onClick={seeResenias}>Ver Reseñas</Button>
                </Row>
            </Container> 
        );
    }   
}

export default UsuarioDetail;
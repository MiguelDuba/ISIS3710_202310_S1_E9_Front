import './UsuarioDetail.css';
import { Col, Row } from 'react-bootstrap';

function UsuarioDetail(props) {

    let antecedentes = <li>No tiene</li>
    if (props.antecedentes.length > 0) {
        antecedentes = props.antecedentes.map((antecedente) => {
            return (
                <li>{antecedente}</li>
            );
        });
    }

    //Se crea una lista de las habilidades/ del usuario
    const caracteristicas = props.caracteristicas.map((habilidad) => {
        return (
            <li>{habilidad}</li>
        );
    });

    return (
        <section className='detalleUsuario'>
            <Row>
                <h1>{props.nombreUsuario}</h1>
            </Row>
            <Row className='informacion-general'>
                <Col>
                    <p>{props.tipoUsuario}</p>
                </Col>
                <Col id="aniosExperiencia">
                    <p>{props.aniosExperiencia} años de experiencia</p>
                </Col>                
            </Row>
            <Row>
                <Col className='info-col'>
                    <ul>
                        <lh>Habilidades</lh>
                        <li>Creatividad </li>
                        <li>Comunicación efectiva </li>
                        <li>Certificación en primeros auxilios y RCP </li>
                    </ul>
                    <ul>
                        <lh>Métodos de Contacto</lh>
                        <li>Celular: {props.celular} </li>
                        <li>Correo: {props.correoElectronico} </li>
                    </ul>
                    <ul>
                        <lh>Antecedentes</lh>
                        {antecedentes}
                    </ul>
                </Col>
                <Col className='centered'>
                    {/* <img alt="Logo for Facebook"src={props.foto}> */}
                    <img id="foto" alt="Foto de Perfil" src={props.foto}></img>
                </Col>
            </Row>
            <Row>
                <Col className='right'>
                <button type="button">Ver Ofertas</button>
                </Col>
                <Col>
                <button type="button">Ver Reseñas</button>
                </Col>
            </Row>
        </section>
    );
}


export default UsuarioDetail;
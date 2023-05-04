import './UsuarioDetail.css';
import { Col, Row } from 'react-bootstrap';

function UsuarioDetail(props) {
    return (
        <section className='detalleUsuario'>
            <Row>
                <h1>{props.NombreUsuario}</h1>
            </Row>
            <Row className='informacion-general'>
                <Col>
                    <p>{props.TipoUsuario}</p>
                </Col>
                <Col>
                <p>{props.AniosExperiencia} años de experiencia</p>
                </Col>                
            </Row>
            <Row>
                <ul>
                    <lh>Habilidades</lh>
                    <li>Creatividad </li>
                    <li>Comunicación efectiva </li>
                    <li>Certificación en primeros auxilios y RCP </li>
                </ul>
                <ul>
                    <lh>Métodos de Contacto</lh>
                    <li>Correo: </li>
                    <li>Celular: </li>
                    <li>Certificación en primeros auxilios y RCP </li>
                </ul>
                <ul>
                    <lh>Antecedentes</lh>
                    <li>No tiene </li>
                </ul>
            </Row>

        </section>
    );
}


export default UsuarioDetail;
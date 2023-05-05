import { Button, Col, Row } from "react-bootstrap";
import './OfertaDetail.css';

function OfertaDetail(props) {
    console.log(JSON.stringify(props))
    const info = props.info
    
    return (
        <Row className='detail'>
            <Row>
            <Col>
                <h1 className="person-name">{info.name}</h1>
                <Row className="detail--subtitle">
                    <Col className='offer-type'>{info.offerType}</Col>
                    <Col className="experience">{info.experienceNum} años de experiencia</Col>
                </Row>
                <Row>
                    <Col >
                        <h3 >Precio</h3>
                        <h3 >Habilidades</h3>
                        <h3 >Horario</h3>
                    </Col>
                </Row>
            </Col>

            <Col>
                <div className="image-cropper">
                    <img className='rounded person-img'src={info.image} alt={`Imagen de ${info.name}`}></img> 
                </div>
            </Col>
            </Row>
            <Row className="row--request">
                <Button className="btn--request">Solicitar</Button>
            </Row>
        </Row>
    )
}

export default OfertaDetail;
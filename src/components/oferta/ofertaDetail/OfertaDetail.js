import { Col, Row } from "react-bootstrap";

function OfertaDetail(props) {
    console.log(JSON.stringify(props))
    const info = props.info
    return (
        <Row className='detail'>
            <Col>
                <h1>{info.name}</h1>
                <Row className="detail--subtitle">
                    <Col>{info.offerType}</Col>
                    <Col>{info.experienceNum} años de experiencia</Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Precio</h3>
                        <h3>Habilidades</h3>
                        <h3>Horario</h3>
                    </Col>


                </Row>
            </Col>
            <Col>
            <img src={info.image} alt={`Imagen de ${info.name}`}></img> 
            </Col>
            
            <button>Solicitar</button>
        </Row>
    )
}

export default OfertaDetail;
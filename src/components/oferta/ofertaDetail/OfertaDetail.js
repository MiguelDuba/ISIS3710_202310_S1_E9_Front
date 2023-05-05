import { Button, Col, Row } from "react-bootstrap";
import { formatterCOP } from "../../../helpers/priceFormatter";
import './OfertaDetail.css';

function OfertaDetail(props) {
    console.log(JSON.stringify(props))
    const info = props.info
    const ability_elements = info.abilities.map( (ability) => {
        return <li>{ability}</li>
    });
    const schedule_elements = info.schedule.map( (item) => {
        return <li>{item}</li>
    });
    return (
        <Row className='detail'>
            <Row>
            <Col>
                <div class='detail--title'>
                    <h1 className="person-name">{info.name}</h1>
                    <Row className="detail--subtitle">
                        <Col className='offer-type'>{info.offerType}</Col>
                        <Col className="experience">{info.experienceNum} años de experiencia</Col>
                    </Row>
                </div>
                
                <Row>
                    <Col >
                        <h3 >Precio</h3>
                        {formatterCOP.format(info.price)}
                        <h3 >Habilidades</h3>
                        <ul>{ability_elements}</ul>
                        <h3 >Horario</h3>
                    </Col>
                    <ul>{schedule_elements}</ul>
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
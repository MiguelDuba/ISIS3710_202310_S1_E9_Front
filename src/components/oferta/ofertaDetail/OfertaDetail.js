import { Button, Col, Image, Row } from "react-bootstrap";
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

    const requestOffer = () => {
        console.log('Requesting offer...')
    }
    return (
        <Row className='detail'>
            <Row>
            <Col>
                <div className='detail--title'>
                    <h1 className="person-name">{info.name}</h1>
                    <Row className="detail--subtitle">
                        <Col className='offer-type'>{info.offerType}</Col>
                        <Col className="experience">{info.experienceNum} años de experiencia</Col>
                    </Row>
                </div>
                
                <Row>
                    <Col >
                        <h3 >Precio</h3>
                        <p className='detail--info'>{formatterCOP.format(info.price)}</p>
                        <h3 >Habilidades</h3>
                        <ul className='detail--info'>{ability_elements}</ul>
                        <h3 >Horario</h3>
                        <ul className='detail--info'>{schedule_elements}</ul>
                    </Col>
                </Row>
            </Col>

            <Col>
                <Image className='person-img'src={info.image} alt={`Imagen de ${info.name}`} fluid roundedCircle ></Image> 
            </Col>
            </Row>
            <Row className="row--request">
                {/* <Button variant='flat' >Solicitar</Button> */}
                <Button onClick={requestOffer} variant='flat' >Solicitar</Button>
            </Row>
        </Row>
    )
}

export default OfertaDetail;
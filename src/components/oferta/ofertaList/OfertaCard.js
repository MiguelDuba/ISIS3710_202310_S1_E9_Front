import { Col, Row } from "react-bootstrap";
import { formatterCOP } from "../../../helpers/priceFormatter";
import './OfertaCard.css';

function OfertaCard(props) {
    console.log('card', JSON.stringify(props))
    const userData = props.info.user;
    const offerData = props.info.offer;

    const ability_elements = offerData.abilities.join(', ')
    const schedule_elements = offerData.schedule.join(', ')
    return (
        <div className="ofertaCard">
            <div className='userInfo'>
                <img src={userData.image} rounded-circle alt={`${userData.name} profile`}></img>
                <div className="userInfoTop">
                    <h5>{userData.name}</h5>
                    <p>{userData.offerType}</p>
                    <p>{userData.experienceNum} años de experiencia</p>
                </div>
            </div>
            <div className='infoDiv'>
                <p>Precio</p>
                {formatterCOP.format(offerData.price)}
                <p >Habilidades</p>
                {ability_elements}
                <p >Horario</p>
                {schedule_elements}
            </div>
        </div>
    )
}

export default OfertaCard
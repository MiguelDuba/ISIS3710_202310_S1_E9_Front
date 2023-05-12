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
                <span className='infoDiv--title'>Precio</span>
                {formatterCOP.format(offerData.price)}
                <span className='infoDiv--title'>Habilidades</span>
                {ability_elements}
                <span className='infoDiv--title'>Horario</span>
                {schedule_elements}
            </div>
        </div>
    )
}

export default OfertaCard
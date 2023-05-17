import dayjs from "dayjs";
import { formatterCOP } from "../../../helpers/priceFormatter";
import "./OfertaCard.css";

function OfertaCard(props) {
  const userData = props.info.usuario;
  const offerData = props.info;
  const offerId = offerData.id; 
  const ability_elements = userData.especialidades.join(", ");
  const needs_elements = userData.necesidades.join(", ");
  const schedule_elements = offerData.horarios.map((horario) => {
    const init = dayjs(horario.horaInicio).format('ha')
    const end = dayjs(horario.horaFin).format('ha')
    return `${horario.dia} ${init}-${end}`
  }
  ).join(", ")


  return (
    <div className="ofertaCard">
      <a href={`/ofertas/${offerId}`}>
        <div className="userInfo">
          <img
            src={userData.foto}
            rounded-circle
            alt={`${userData.name} profile`}
          ></img>
          <div className="userInfoTop">
            <h5>{userData.nombre}</h5>
            <p>{userData.tipoOferta}</p>
            <p>{userData.aniosExperiencia} años de experiencia</p>
          </div>
        </div>
        <div className="infoDiv">
          <span className="infoDiv--title">Precio</span>
          {formatterCOP.format(offerData.precio)}
          
          {userData.especialidades.len > 0 && <span className="infoDiv--title">Habilidades</span>}
          {ability_elements}
          {userData.necesidades.len > 0 && <span className="infoDiv--title">Necesidades</span>}
          {needs_elements}
          <span className="infoDiv--title">Horario</span>
          {schedule_elements}
        </div>
      </a>
    </div>
  );
}

export default OfertaCard;

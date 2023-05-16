import { formatterCOP } from "../../../helpers/priceFormatter";
import "./OfertaCard.css";

function OfertaCard(props) {

  console.log("card", props.info);
  const userData = props.info.usuario;
  const offerData = props.info;

  console.log('user', userData)
  console.log('off', offerData)
  const ability_elements = userData.especialidades.join(", ");
  const needs_elements = userData.necesidades.join(", ");
  const schedule_elements = offerData.horarios.join(", ");
  return (
    <div className="ofertaCard">
      <a href="#">
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
          <span className="infoDiv--title">Habilidades</span>
          {ability_elements}
          <span className="infoDiv--title">Horario</span>
          {schedule_elements}
        </div>
      </a>
    </div>
  );
}

export default OfertaCard;

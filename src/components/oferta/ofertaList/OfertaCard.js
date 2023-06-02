import { FormattedMessage, FormattedPlural, useIntl } from "react-intl";
import {
  convertToUSD,
  formatterCOP,
  formatterUSD,
} from "../../../helpers/priceFormatter";
import { formatOfferTime } from "../../../helpers/timeFormatter";
import "./OfertaCard.css";

function OfertaCard(props) {
  const userData = props.info.usuario;
  const offerData = props.info;
  const offerId = offerData.id;
  const ability_elements = userData.especialidades.join(", ");
  const needs_elements = userData.necesidades.join(", ");
  const schedule_elements = offerData.horarios
    .map((horario) => formatOfferTime(horario))
    .join(", ");

  const intl = useIntl();

  const showLocalizedPrice = (precio) => {
    if (intl.locale === "en") {
      return formatterUSD.format(convertToUSD(precio));
    }
    return formatterCOP.format(precio);
  };
  return (
    <div className="ofertaCard">
      <a href={`/ofertas/${offerId}`}>
        <div className="userInfo">
            <img
              src={userData.foto}
              alt={`${userData.name} profile`}
            ></img>
          <div className="userInfoTop">
            <h5>{userData.nombre}</h5>
            <p>{offerData.tipoOferta}</p>
            <p>
              {userData.aniosExperiencia}{" "}
              <FormattedPlural
                value={userData.aniosExperiencia}
                one={<FormattedMessage id="experience-sing" />}
                other={<FormattedMessage id="experience-pl" />}
              />
            </p>
          </div>
        </div>
        <div className="infoDiv">
          <span className="infoDiv--title">
            <FormattedMessage id="price" />
          </span>
          {showLocalizedPrice(offerData.precio)}

          {userData.especialidades.len > 0 && (
              <span className="infoDiv--title">
                <FormattedMessage id="abilities" />
              </span>
            ) &&
            ability_elements}
          {userData.necesidades.len > 0 && (
              <span className="infoDiv--title">
                <FormattedMessage id="needs" />
              </span>
            ) &&
            needs_elements}
          <span className="infoDiv--title">
            <FormattedMessage id="schedule" />
          </span>
          {schedule_elements}
        </div>
      </a>
    </div>
  );
}

export default OfertaCard;

import {
  convertToUSD,
  formatterCOP,
  formatterUSD,
} from ".//../../helpers/priceFormatter";
  
import { FormattedMessage, useIntl } from "react-intl";

function ContratoCard(props){
    
    const userData = JSON.parse(localStorage.getItem("userData"));
    const contractData = props.info.contractFullData;
    const contractId = contractData.id;
    const contractDate = contractData.fecha;

    const intl = useIntl();

    const showLocalizedPrice = (precio) => {
      if (intl.locale === "en") {
        return formatterUSD.format(convertToUSD(precio));
      }
    return formatterCOP.format(precio);
    };


    return (
        <div className="contratoCard">
          <a href={`/contratos/${contractId}`}>
            <div className="userInfo">
              <img
                src={userData.foto}
                rounded-circle
                alt={`${userData.name} profile`} 
              ></img>
              <div className="userInfoTop">
                <h5>{userData.nombre}</h5>
                <p>{contractData.actividad}</p>
              </div>
            </div>
            <div className="infoDiv">
              <span className="infoDiv--title">
                <FormattedMessage id="price-day" />
              </span>
              {showLocalizedPrice(contractData.oferta.precio)}
              <span className="infoDiv--title">Fecha</span>
              {contractData.fecha}
              <span className="infoDiv--title">
                <FormattedMessage id="contract-date" />
              </span>
                {contractDate}
            </div>
          </a>
        </div>
      );
}

export default ContratoCard
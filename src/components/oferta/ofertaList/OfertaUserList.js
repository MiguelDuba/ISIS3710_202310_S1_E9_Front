import { useEffect, useState } from "react";
import { FormattedDate, FormattedMessage } from "react-intl";
import { useParams } from "react-router-dom";
import {
    getOfferByUser,
} from "../../../helpers/backend/offerBackend";
import "./OfertaUserList.css";


function OfertaUserList() {
  const params = useParams();
  const usuarioId = params.usuarioId;

  const [ofertas, setOfertas] = useState([]);

  useEffect(() => {
    getOfferByUser(usuarioId).then((res) => {
      setOfertas(res);
    });
  }, [usuarioId]);

  if (ofertas.length === 0) {
    return (
      <div>
        <h1>No hay ofertas para mostar</h1>
        {/* //TODO: traducir */}
      </div>
    );
  } else {
    return (
        <div>
          <h1>
            {/* <FormattedMessage id="offers" /> */}
            Ofertas
          </h1>
          <div className="offer-list-container">
          {ofertas
            .filter((oferta) => oferta.disponible)
            .map((oferta) => {
              return (
                <div className='oferta-item'>
                    <a href={`/ofertas/${oferta.id}`}>
                    <ul className="oferta-list">
                    <li>
                      {/* <FormattedMessage id="type" />: {oferta.tipo} */}
                        Tipo: {oferta.tipoOferta}
                        <li>
                          {/* <FormattedMessage id="init-date" />: 
                          <FormattedDate
                            value={new Date(oferta.fechaInicio)}
                            year="numeric"
                            month="long"
                            day="numeric"
                            weekday="long"
                          /> */}
                            Fecha de inicio: {oferta.fechaInicio}
                        </li>
                        <li>
                          {/* <FormattedMessage id="end-date" />: 
                          <FormattedDate
                            value={new Date(oferta.fechaFin)}
                            year="numeric"
                            month="long"
                            day="numeric"
                            weekday="long"
                          /> */}
                            Fecha de fin: {oferta.fechaFin}
                        </li>
                    </li>
                  </ul>
                    </a>
                  
                </div>
              );
            })}
          </div>
          
        </div>
    );
  }
 

}

export default OfertaUserList;

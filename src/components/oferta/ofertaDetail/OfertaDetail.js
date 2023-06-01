import { useEffect, useState } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { FormattedMessage, FormattedPlural, useIntl } from "react-intl";
import { Navigate, useParams } from "react-router-dom";
import { getOfferDetail } from "../../../helpers/backend/offerBackend";
import {
  convertToUSD,
  formatterCOP,
  formatterUSD,
} from "../../../helpers/priceFormatter";
import { formatOfferTime } from "../../../helpers/timeFormatter";
import "./OfertaDetail.css";

function OfertaDetail() {
  const params = useParams();
  const intl = useIntl();
  const token = localStorage.getItem("sessionToken");
  const [offer, setOffer] = useState({});

  const offerId = params.ofertaId;

  useEffect(() => {
    getOfferDetail(offerId).then((res) => setOffer(res));
  }, [offerId]);

  if (!token) {
    <Navigate to="/error"></Navigate>;
  }

  const showLocalizedPrice = (precio) => {
    if (intl.locale === "en") {
      return formatterUSD.format(convertToUSD(precio));
    }
    return formatterCOP.format(precio);
  };

  const requestOffer = () => {
    console.log("Requesting offer...");
  };

  if (Object.keys(offer).length === 0) {
    return <h1>Loading...</h1>;
  } else if (offer) {
    return (
      <>
        <div className="ofertaDetail--container">
          <div className="ofertaDetail--info">
            <div className="detail--title">
              <h1 className="person-name">{offer.usuario.nombre}</h1>
              <Row className="detail--subtitle">
                <Col className="offer-type">{offer.tipoOferta}</Col>
                <Col className="experience">
                  {offer.usuario.aniosExperiencia}{" "}
                  <FormattedPlural
                    value={offer.usuario.aniosExperiencia}
                    one={<FormattedMessage id="experience-sing" />}
                    other={<FormattedMessage id="experience-pl" />}
                  />
                </Col>
              </Row>
            </div>
            <div>
              <h3>
                <FormattedMessage id="price" />
              </h3>
              <p className="detail--info">{showLocalizedPrice(offer.precio)}</p>
            </div>
            {offer.usuario.especialidades &&
              offer.usuario.especialidades.length > 0 && (
                <div>
                  <h3>
                    <FormattedMessage id="abilities" />
                  </h3>
                  <ul className="detail--info">
                    {offer.usuario.especialidades.map((ability) => {
                      return <li>{ability.tipo}</li>;
                    })}
                  </ul>
                </div>
              )}
            {offer.usuario.necesidades &&
              offer.usuario.necesidades.length > 0 && (
                <div>
                  <h3>
                    <FormattedMessage id="needs" />
                  </h3>
                  <ul className="detail--info">
                    {offer.usuario.necesidades.map((ability) => {
                      return <li>{ability.tipo}</li>;
                    })}
                  </ul>
                </div>
              )}
            <div>
              <h3>
                <FormattedMessage id="schedule" />
              </h3>
              <ul className="detail--info">
                {offer.horarios.map((item) => {
                  return <li>{formatOfferTime(item)}</li>;
                })}
              </ul>
            </div>
          </div>
          <div className="ofertaDetail--image">
            <Image
              className="person-img"
              src={offer.usuario.foto}
              alt={`Imagen de ${offer.usuario.nombre}`}
              fluid
              roundedCircle
            ></Image>
          </div>
        </div>
        <Button onClick={requestOffer} variant="flat">
          <FormattedMessage id="request" />
        </Button>
      </>
    );
  } else {
    return (
      <h1>
        <FormattedMessage id="offer-detail-err" />
      </h1>
    );
  }
}

export default OfertaDetail;

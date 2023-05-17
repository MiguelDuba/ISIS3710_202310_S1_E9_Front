import { useEffect, useState } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { Navigate, useParams } from "react-router-dom";
import {
  getOfferById,
  getUserbyOffer,
} from "../../../helpers/backend/offerBackend";
import { BASE_URL } from "../../../helpers/constants";
import { formatterCOP } from "../../../helpers/priceFormatter";
import { formatOfferTime } from "../../../helpers/timeFormatter";
import { ofertaDetail } from "../../../tempData/ofertaData";
import "./OfertaDetail.css";

function OfertaDetail() {
  const params = useParams();
  const token = localStorage.getItem("sessionToken");
  const [offer, setOffer] = useState();

  const offerId = params.ofertaId;

  useEffect(
    () =>
      async function () {
        const newOffer = await getOfferById(offerId);
        setOffer(newOffer);
        console.log("offer set", newOffer);
        if (newOffer.statusCode) {
          console.log("err at offer");
        } else {
          const userData = await getUserbyOffer(
            newOffer.id,
            newOffer.usuario.id
          );
          if (userData.statusCode) {
            console.log("err at user");
          } else {
            console.log(newOffer.usuario)
            newOffer.usuario = userData;
            console.log(newOffer.usuario)
            setOffer({...newOffer, usuario: userData});
            console.log("offer w/ set", newOffer);
          }
        }
      },
    [offerId]
  );

  if (!token) {
    <Navigate to="/error"></Navigate>;
  }

  const requestOffer = () => {
    console.log("Requesting offer...");
  };

  if (offer) {
    return (
      <>
        <div className="ofertaDetail--container">
          <div className="ofertaDetail--info">
            <div className="detail--title">
              <h1 className="person-name">{offer.usuario.nombre}</h1>
              <Row className="detail--subtitle">
                <Col className="offer-type">{offer.tipoOferta}</Col>
                <Col className="experience">
                  {offer.usuario.aniosExperiencia} años de experiencia
                </Col>
              </Row>
            </div>
            <div>
              <h3>Precio</h3>
              <p className="detail--info">
                {formatterCOP.format(offer.precio)}
              </p>
            </div>
            {offer.usuario.especialidades && offer.usuario.especialidades.length > 0 && <div>
              <h3>Habilidades</h3>
              <ul className="detail--info">
                {offer.usuario.especialidades.map((ability) => {
                  return <li>{ability.tipo}</li>;
                })}
              </ul>
            </div>}
            {offer.usuario.necesidades && offer.usuario.necesidades.length > 0 && <div>
              <h3>Necesidades</h3>
              <ul className="detail--info">
                {offer.usuario.necesidades.map((ability) => {
                  return <li>{ability.tipo}</li>;
                })}
              </ul>
            </div>}
            <div>
              <h3>Horario</h3>
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
          Solicitar
        </Button>
      </>
    );
  } else {
    return <h1>Error getting offer</h1>;
  }
}

export default OfertaDetail;

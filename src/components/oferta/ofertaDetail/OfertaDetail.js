import { useEffect, useState } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../helpers/constants";
import { formatterCOP } from "../../../helpers/priceFormatter";
import "./OfertaDetail.css";

function OfertaDetail(props) {
  const params = useParams();
  const offerId = params.ofertaId;

  const [offer, setOffer] = useState();

  useEffect( () => {
    const token = localStorage.getItem('sessionToken')
    fetch(`${BASE_URL}/ofertas/${offerId}`, {
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    })
    .then((response) => response.json())
    .then((data) => {
      // TODO check that offer is found
      setOffer(data)
    });
  }, [offer, offerId])
  

  const ability_elements = offer.abilities.map((ability) => {
    return <li>{ability}</li>;
  });
  const schedule_elements = offer.schedule.map((item) => {
    return <li>{item}</li>;
  });

  const requestOffer = () => {
    console.log("Requesting offer...");
  };
  return (
    <>
      <div className="ofertaDetail--container">
        <div className="ofertaDetail--info">
          <div className="detail--title">
            <h1 className="person-name">{offer.name}</h1>
            <Row className="detail--subtitle">
              <Col className="offer-type">{offer.offerType}</Col>
              <Col className="experience">
                {offer.experienceNum} años de experiencia
              </Col>
            </Row>
          </div>
          <div>
            <h3>Precio</h3>
            <p className="detail--info">{formatterCOP.format(offer.price)}</p>
          </div>
          <div>
            <h3>Habilidades</h3>
            <ul className="detail--info">{ability_elements}</ul>
          </div>
          <div>
            <h3>Horario</h3>
            <ul className="detail--info">{schedule_elements}</ul>
          </div>
        </div>
        <div className="ofertaDetail--image">
          <Image
            className="person-img"
            src={offer.image}
            alt={`Imagen de ${offer.name}`}
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
}

export default OfertaDetail;

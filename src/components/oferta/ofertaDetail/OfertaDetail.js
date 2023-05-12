import { Button, Col, Image, Row } from "react-bootstrap";
import { formatterCOP } from "../../../helpers/priceFormatter";
import "./OfertaDetail.css";

function OfertaDetail(props) {
  console.log(JSON.stringify(props));
  const info = props.info;
  const ability_elements = info.abilities.map((ability) => {
    return <li>{ability}</li>;
  });
  const schedule_elements = info.schedule.map((item) => {
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
            <h1 className="person-name">{info.name}</h1>
            <Row className="detail--subtitle">
              <Col className="offer-type">{info.offerType}</Col>
              <Col className="experience">
                {info.experienceNum} años de experiencia
              </Col>
            </Row>
          </div>
          <div>
            <h3>Precio</h3>
            <p className="detail--info">{formatterCOP.format(info.price)}</p>
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
            src={info.image}
            alt={`Imagen de ${info.name}`}
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

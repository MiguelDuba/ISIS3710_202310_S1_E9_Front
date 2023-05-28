import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FormattedMessage } from "react-intl";
import facebookIcn from "../../../icons/facebook.svg";
import whatsappIcn from "../../../icons/whatsapp.svg";
import youtubeIcn from "../../../icons/youtube.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div style={{ display: "block" }}></div>
      <Row>
        <Col className="footer-col">
          <ul className="footer--ul">
            <li className="brand-name">
              Kangar<span>oo</span>
            </li>
            <li className="contacto-li" >
              <FormattedMessage id="contact" />
              <ul className="socials">
                <a href="#">
                  <img alt="Logo for Facebook" src={facebookIcn}></img>
                </a>
                <a href="#">
                  <img alt="Logo for Whatsapp" src={whatsappIcn}></img>
                </a>
                <a href="#">
                  <img alt="Logo for Youtube" src={youtubeIcn}></img>
                </a>
              </ul>
            </li>
          </ul>
        </Col>
        <Col className="footer-col">
          {" "}
          Kangaroo
          <ul className="footer--ul">
            <li className="footer--link">
              <a href="#">
                <FormattedMessage id="how-it-works" />
              </a>
            </li>
            <li className="footer--link">
              <a href="#">
                <FormattedMessage id="help" />
              </a>
            </li>
            <li className="footer--link">
              <a href="#">
                <FormattedMessage id="terms" />
              </a>
            </li>
            <li className="footer--link">
              <a href="#">
                <FormattedMessage id="data" />
              </a>
            </li>
          </ul>
        </Col>
        <Col className="footer-col">
          <FormattedMessage id="contact" />
          <ul className="footer--ul">
            <li className="footer--link">
              <a href="#">
                <FormattedMessage id="about" />
              </a>
            </li>
            <li className="footer--link">
              <a href="#">
                <FormattedMessage id="advice" />
              </a>
            </li>
            <li className="footer--link">
              <a href="#">
                <FormattedMessage id="security" />
              </a>
            </li>
            <li className="footer--link">
              <a href="#">
                <FormattedMessage id="rules" />
              </a>
            </li>
            <li className="footer--link">
              <a href="#">
                <FormattedMessage id="special-needs" />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;

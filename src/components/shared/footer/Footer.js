import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import facebookIcn from '../../../icons/facebook.svg';
import whatsappIcn from '../../../icons/whatsapp.svg';
import youtubeIcn from '../../../icons/youtube.svg';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <div style={{display: 'block'}}></div>
            <Row>
            <Col className='footer-col'>
                <ul>
                    <li className='brand-name'>Kangar<span>oo</span></li>
                    <li>Contactanos y siguenos
                        <ul className='socials'>
                            <a href="#"><img alt="Logo for Facebook"src={facebookIcn}></img></a>
                            <a href="#"><img alt="Logo for Whatsapp"src={whatsappIcn}></img></a>
                            <a href="#"><img alt="Logo for Youtube"src={youtubeIcn}></img></a>
                        </ul>
                    </li>
                </ul>
            </Col>
            <Col className='footer-col'> Kangaroo
                <ul>
                    <li><a href="#">Como funciona</a></li>
                    <li><a href="#">Ayuda</a></li>
                    <li><a href="#">Términos y privacidad</a></li>
                    <li><a href="#">Datos</a></li>
                </ul>
            </Col>
            <Col className='footer-col'>
                Conecta
                <ul>
                    <li><a href="#">Sobre nosotros</a></li>
                    <li><a href="#">Consejos</a></li>
                    <li><a href="#">Seguridad</a></li>
                    <li><a href="#">Normas</a></li>
                    <li><a href="#">Necesidades especiales</a></li>
                </ul>
            </Col>
            </Row>
        </footer>
    )
}

export default Footer;
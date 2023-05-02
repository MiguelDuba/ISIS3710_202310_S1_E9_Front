import Col from 'react-bootstrap/Col';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <Col>
                <ul>
                    <li>Kangaroo</li>
                    <li>Contactanos y siguenos
                        <ul>
                            <a href="#">Facebook</a>
                            <a href="#">Whatsapp</a>
                            <a href="#">Instragram</a>
                        </ul>
                    </li>
                </ul>
            </Col>
            <Col> Kangaroo
                <ul>
                    <li><a href="#">Como funciona</a></li>
                    <li><a href="#">Ayuda</a></li>
                    <li><a href="#">Términos y privacidad</a></li>
                    <li><a href="#">Datos</a></li>
                </ul>
            </Col>
            <Col>
                Conecta
                <ul>
                    <li><a href="#">Sobre nosotros</a></li>
                    <li><a href="#">Consejos</a></li>
                    <li><a href="#">Seguridad</a></li>
                    <li><a href="#">Normas</a></li>
                    <li><a href="#">Necesidades especiales</a></li>
                </ul>
            </Col>
        </footer>
    )
}

export default Footer;
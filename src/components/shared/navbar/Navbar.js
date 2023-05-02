import logo from '../../../logo.svg';
import './Navbar.css';

function Navbar() {
    return (
        <nav>
            <a className='nav--logo'><img src={logo}></img>Kangaroo</a>
            <ul className='nav--items'>
                <li>Inicio</li>
                <li>Sobre</li>
                <li>Preguntas Frecuentes</li>
                <li><i>Icono Busqueda</i></li>
            </ul>
            <ul className='nav--users'>
                <li className='log-in'>Accede</li>
                <li className='sing-up'>Registrate</li>
            </ul>
        </nav>
    )
}

export default Navbar;
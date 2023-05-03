import searchIcn from '../../../icons/lupa.svg';
import logo from '../../../logo.svg';
import './Navbar.css';

function Navbar() {
    return (
        <nav>
            <a className='nav--brand' href='#'><img src={logo} alt="Cartoon of a kangaroo"></img>Kangaroo</a>
            <ul className='nav--items'>
                <li>Inicio</li>
                <li>Sobre</li>
                <li>Preguntas Frecuentes</li>
                <li><img src={searchIcn}></img></li>
            </ul>
            <ul className='nav--users'>
                <button className='log-in'>Accede</button>
                <button className='sign-up'>Registrate</button>
            </ul>
        </nav>
    )
}

export default Navbar;
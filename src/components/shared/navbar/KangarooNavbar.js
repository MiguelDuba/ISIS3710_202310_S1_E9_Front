import { Button, Nav, Navbar } from 'react-bootstrap';
import searchIcn from '../../../icons/lupa.svg';
import logo from '../../../logo.svg';
import Login from '../login/Login';
import './Navbar.css';

function KangarooNavbar() {
    return (
        <Navbar className='kangaroo-nav' bg-white fixed='top' expand="lg">
            <Navbar.Brand>
                <a className='nav--brand' href='#'><img src={logo} alt="Cartoon of a kangaroo"></img>Kangaroo</a> 
            </Navbar.Brand>
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link href='#'>Inicio</Nav.Link>
                    <Nav.Link href='#'>Sobre</Nav.Link>
                    <Nav.Link href='#'>Preguntas Frecuentes</Nav.Link>
                    <Nav.Link href='#'><img className='searchIcn' src={searchIcn} alt='Search button'></img></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse>
                <Nav>
                    <a href='/login'><Button className='log-in'>Accede</Button></a>
                    <Button className='sign-up'>Registrate</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default KangarooNavbar;
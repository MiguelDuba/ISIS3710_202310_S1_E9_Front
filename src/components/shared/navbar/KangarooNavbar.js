import { Button, Nav, Navbar } from 'react-bootstrap';
import searchIcn from '../../../icons/lupa.svg';
import logo from '../../../logo.svg';
import './Navbar.css';

function KangarooNavbar() {
    return (
        <Navbar fixed='top' expand="lg">
            <Navbar.Brand>
                <a className='nav--brand' href='#'><img src={logo} alt="Cartoon of a kangaroo"></img>Kangaroo</a> 
            </Navbar.Brand>
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link href='#'>Inicio</Nav.Link>
                    <Nav.Link href='#'>Sobre</Nav.Link>
                    <Nav.Link href='#'>Preguntas Frecuentes</Nav.Link>
                    <Nav.Link href='#'><img src={searchIcn}></img></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse>
                <Nav>
                    <Button className='log-in'>Accede</Button>
                    <Button className='sign-up'>Registrate</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default KangarooNavbar;
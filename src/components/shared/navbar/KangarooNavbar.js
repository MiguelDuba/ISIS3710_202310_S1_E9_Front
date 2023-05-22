import { Button, Nav, Navbar } from 'react-bootstrap';
import searchIcn from '../../../icons/lupa.svg';
import logo from '../../../logo.svg';
import './Navbar.css';

function KangarooNavbar() {
    const user = localStorage.getItem('userData')
    const userData = JSON.parse(user)
    const urlDetalle = '/usuarios/' + userData.id + "/Canguro"

    const logoutUser = () => {
        localStorage.removeItem('userData')
        localStorage.removeItem('sessionToken')
        window.location.reload()
    }
    
    const loadUser = () => {
        if(!user) {
            return ( <Nav>
            <a href='/login'><Button className='log-in'>Accede</Button></a>
            <a href='/register'><Button className='sign-up'>Crea tu Cuenta</Button></a>
        </Nav>)
        } else {
            return (<Nav><a href={urlDetalle}>{userData.nombre}</a> <Button onClick={logoutUser} className='logout'>Salir</Button></Nav>)
        }
    }
    return (
        <Navbar className='kangaroo-nav' bg-white fixed='top' expand="lg">
            <Navbar.Brand>
                <a className='nav--brand' href='#'><img src={logo} alt="Cartoon of a kangaroo"></img>Kangaroo</a> 
            </Navbar.Brand>
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link href='/'>Inicio</Nav.Link>
                    <Nav.Link href='/'>Sobre</Nav.Link>
                    <Nav.Link href='/'>Preguntas Frecuentes</Nav.Link>
                    <Nav.Link href='/'><img className='searchIcn' src={searchIcn} alt='Search button'></img></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse>
                {loadUser()}
            </Navbar.Collapse>
        </Navbar>
    );
}

export default KangarooNavbar;
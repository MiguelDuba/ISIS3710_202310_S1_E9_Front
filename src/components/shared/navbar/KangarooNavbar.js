import { Button, Nav, Navbar } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import searchIcn from '../../../icons/lupa.svg';
import logo from '../../../logo.svg';
import './Navbar.css';

function KangarooNavbar() {
    const user = localStorage.getItem('userData')
    const userData = JSON.parse(user)
    
    const logoutUser = () => {
        localStorage.removeItem('userData')
        localStorage.removeItem('sessionToken')
        window.location.href = '/';
    }
    
    const loadUser = () => {
        if(!user) {
            return ( <Nav>
            <a href='/login'><Button className='log-in'><FormattedMessage id='sign-in'/></Button></a>
            <a href='/register'><Button className='sign-up'><FormattedMessage id='sign-up'/></Button></a>
        </Nav>)
        } else {

            return (
              <Nav>
                <a className="user-profile" href={'/usuarios/' + userData.id}>
                  {userData.nombre}
                </a>{" "}
                <Button onClick={logoutUser} className="logout">
                  <FormattedMessage id="log-out" />
                </Button>
              </Nav>
            );
        }
    }
    return (
        <Navbar className='kangaroo-nav' bg-white fixed='top' expand="lg">
            <Navbar.Brand>
                <a className='nav--brand' href='/'><img src={logo} alt="Cartoon of a kangaroo"></img>Kangaroo</a> 
            </Navbar.Brand>
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link href='/'><FormattedMessage id='start'/></Nav.Link>
                    <Nav.Link href='/'><FormattedMessage id='about'/></Nav.Link>
                    <Nav.Link href='/'><FormattedMessage id='FAQ'/></Nav.Link>
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
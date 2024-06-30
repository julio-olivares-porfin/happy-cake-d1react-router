import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logoImg from '../assets/happycake-logo.png'

const Navigation = () => {
  return (
    <Navbar expand="lg" className='navbar-color'>
      <Container className='navbar-control'>
        <Navbar.Brand to='/' as= {Link}>
        <img
            src={logoImg}
            width= "50%"
            className="d-inline-block align-top"
            alt="Happy Cake"
          />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav navbar-toggle" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link to='/' as={Link}>Home</Nav.Link>
            <Nav.Link to='/contact' as={Link}>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

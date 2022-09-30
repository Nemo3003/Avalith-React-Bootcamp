import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../assets/logo.png'

export const HomeNavbar=()=> {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="45"
              height="45"
              className="d-inline-block align-top"
              color='white'
            />{' '}
            Fina APP
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link color="white" href='/'>Home</Nav.Link>
            <Nav.Link href='/about'>About</Nav.Link>
            <Nav.Link href='/character'>Characters</Nav.Link>
            <Nav.Link href='/fav'>Favorites</Nav.Link>

            <Nav.Link href='/login'>Login</Nav.Link>
            <Nav.Link href='/register'>Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

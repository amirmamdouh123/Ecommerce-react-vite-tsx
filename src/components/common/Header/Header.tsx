import './Header.css'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import StoreSVG from '@components/Ecommerce/HeaderSVG/BasketSVG';
import { NavLink } from 'react-router-dom';
function Header(){

 return( <header>
  
  <h1> <span>our</span>  <Badge bg='info'>Ecom</Badge></h1>
  <Navbar expand="lg" className="bg-body-tertiary" bg='dark' >
    <Container >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
          <Nav.Link as={NavLink} to='categories'>Categories</Nav.Link>
          <Nav.Link as={NavLink} to='aboutus'>About</Nav.Link>
        </Nav>
        <StoreSVG />

        <Nav>
          <Nav.Link href="#home">Login</Nav.Link>
          <Nav.Link href="#link">Register</Nav.Link>
        </Nav>
      </Navbar.Collapse>

    </Container>
  </Navbar>
  </header>
  )

}

export default Header;
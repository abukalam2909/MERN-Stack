import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">ProdManage</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/products">Products</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;

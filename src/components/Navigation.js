import { Container, Nav, Navbar } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { LinkContainer } from "react-router-bootstrap";
import styled from "styled-components";

const NavBar = () => {
  return (
    <NavB>
      <Navbar
        className="nav-bg"
        bg="light"
        collapseOnSelect
        expand="lg"
        variant="light"
      >
        <Container>
          <LinkContainer
            to="/"
            style={{
              fontVariant: "petite-caps",
              fontWeight: 600,
              color: "red",
              fontFamily: "Courgette",
              fontSize: "x-large",
              display:'flex',
              alignItems:'center'
            }}
          >
            <Navbar.Brand>Pizzasio
            <AiOutlineShoppingCart className="ms-1" style={{ fontSize: "larger" }} />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto me-auto">
              <LinkContainer to="/">
                <Nav.Link className="me-2">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/menu">
                <Nav.Link className="me-2">Menu</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/orders">
                <Nav.Link className="me-2">Orders</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link className="me-2">About</Nav.Link>
              </LinkContainer>
              <Nav.Link href="#contact" className="me-2">
                Contact
              </Nav.Link>
            </Nav>
            <Nav className="d-flex align-items-center">
              <LinkContainer
                to="/cart"
                className="d-flex justify-content-center"
              >
                <Nav.Link>
                  <AiOutlineShoppingCart style={{ fontSize: "larger" }} />
                  <p className="d-block d-sm-block d-md-none d-lg-none mx-1">
                    Cart
                  </p>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavB>
  );
};

export default NavBar;
const NavB = styled.div`
  .navbar-collapse {
    text-align: center;
  }
  .nav-bg{
    background: white !important;
    z-index: 1;
  }
`;

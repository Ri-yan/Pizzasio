import { Container, Nav, Navbar } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { LinkContainer } from "react-router-bootstrap";
import styled from "styled-components";
import { useApp } from "../context/context";

const NavBar = () => {
  const {cart} = useApp()
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
          <div className="d-flex">
          <LinkContainer
                to="/cart"
                className="d-flex justify-content-center me-2"
              >
            <div className="cart d-flex align-items-center d-block d-sm-block d-md-block d-lg-none">
              <span className="me-1">{cart.length}</span>
              <AiOutlineShoppingCart style={{ fontSize: "larger" }} />
            </div>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          </div>

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
                className="d-flex justify-content-center d-none d-sm-none d-md-none d-lg-block"
              >
                <Nav.Link>
                  <div className="cart d-flex align-items-center">
                    <span className="me-1">{cart.length}</span>
                    <AiOutlineShoppingCart style={{ fontSize: "larger" }} />
                  </div>
                  {/* <p className="d-block d-sm-block d-md-none d-lg-none mx-1">Cart</p> */}
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
  .cart{
    background: #e95c4e;
    color: white;
    padding: 3px 12px;
    border-radius: 1em;
  }
`;

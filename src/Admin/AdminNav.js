import {Container,Nav,Navbar} from 'react-bootstrap';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {LinkContainer} from 'react-router-bootstrap'
import styled from 'styled-components'

const AdminNav = () => {
  return (
    <NavB>
        <Navbar style={{zIndex:'1',background: 'white !important'}} bg="light" collapseOnSelect expand="lg" variant="light" >
        <Container>
        <LinkContainer to='/' style={{fontVariant:'petite-caps',fontWeight:600,color:'#e95c4e',fontFamily:'Courgette',fontSize:'x-large'}}><Navbar.Brand >Pizzasio</Navbar.Brand></LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto me-auto">
            <LinkContainer to='/admin/home'><Nav.Link className='me-2'><AiOutlineShoppingCart style={{fontSize:'larger'}}/> Orders</Nav.Link></LinkContainer>
            <LinkContainer to='/admin/products'><Nav.Link className='me-2'>Products</Nav.Link></LinkContainer>
            <LinkContainer to='/admin/materials'><Nav.Link className='me-2'>Materials</Nav.Link></LinkContainer>
          </Nav>
          <Nav className="">
            <LinkContainer to='/admin'><Nav.Link >Log Out</Nav.Link></LinkContainer>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </NavB>
  )
}

export default AdminNav
const NavB = styled.div`

.navbar-collapse{
  text-align: center;
}`
import styled from "styled-components";
import { Col, Container, Row } from 'react-bootstrap'

const Orders = () => {
  return (
    <Order>
         <Container>
            <Row>
                <Col>
                <h1>Orders Section</h1>
                <h5>Adding soon</h5>
                </Col>
            </Row>
        </Container>
    </Order>
  )
}

export default Orders;

const Order = styled.div`
 height: 100vh;
    display: flex;
    text-align: center;
    width: -webkit-fill-available;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        font-family: 'Courgette', cursive;
        color: red;
        font-size: -webkit-xxx-large;
    }
`
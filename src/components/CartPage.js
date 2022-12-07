import Card from 'react-bootstrap/Card';
import styled from 'styled-components'
import { Container,Row,Col,Button } from 'react-bootstrap';
import { Barbecue_grill_Italian_pizza } from '../assets';
import {AiOutlineDelete} from 'react-icons/ai'
const CartPage = () => {
  return (
    <Cart>
      <Container>
        <h2 className='pb-5' style={{color:'red'}}>My Cart</h2>
        <Row >
            <Col sm={5} className='left'>
                <Card className='m-1' style={{ width: '100%',display:'flex',flexDirection:'row' }}>
                <Card.Img className='cover' variant="top" src={Barbecue_grill_Italian_pizza} />
                <Card.Body className="d-flex justify-content-between">
                    <div className="d-flex flex-column flex-lg-row flex-lg-row">
                    <div className="d-flex flex-column text-start">
                        <Card.Title className='m-0' style={{fontSize:'medium'}}>Barbecue grill Pizza</Card.Title>
                        <span className='type' >medium</span>
                        <span  style={{fontSize:'small'}}>quantity : 3</span>
                    </div>
                    <span className='text-start mx-0 mx-lg-4 '  style={{fontSize:'medium'}}>Total price<br/>2505/-</span>
                    </div>
                    <span  style={{cursor:'pointer'}}><AiOutlineDelete/></span>
                </Card.Body>
                </Card>

                <Card className='m-1' style={{ width: '100%',display:'flex',flexDirection:'row' }}>
                <Card.Img className='cover' variant="top" src={Barbecue_grill_Italian_pizza} />
                <Card.Body className="d-flex justify-content-between">
                    <div className="d-flex flex-column flex-lg-row flex-lg-row">
                    <div className="d-flex flex-column text-start">
                        <Card.Title className='m-0' style={{fontSize:'medium'}}>Barbecue grill Pizza</Card.Title>
                        <span className='type' >medium</span>
                        <span  style={{fontSize:'small'}}>quantity : 3</span>
                    </div>
                    <span className='text-start mx-0 mx-lg-4'  style={{fontSize:'medium'}}>Total price<br/>2505/-</span>
                    </div>
                    <span style={{cursor:'pointer'}}><AiOutlineDelete/></span>
                </Card.Body>
                </Card>
                <Card className='m-1' style={{ width: '100%',display:'flex',flexDirection:'row' }}>
                <Card.Img className='cover' variant="top" src={Barbecue_grill_Italian_pizza} />
                <Card.Body className="d-flex justify-content-between">
                    <div className="d-flex flex-column flex-lg-row flex-lg-row">
                    <div className="d-flex flex-column text-start">
                        <Card.Title className='m-0' style={{fontSize:'medium'}}>Barbecue grill Pizza</Card.Title>
                        <span className='type' >medium</span>
                        <span  style={{fontSize:'small'}}>quantity : 3</span>
                    </div>
                    <span className='text-start mx-0 mx-lg-4'  style={{fontSize:'medium'}}>Total price<br/>2505/-</span>
                    </div>
                    <span style={{cursor:'pointer'}}><AiOutlineDelete/></span>
                </Card.Body>
                </Card>
                <Card className='m-1' style={{ width: '100%',display:'flex',flexDirection:'row' }}>
                <Card.Img className='cover' variant="top" src={Barbecue_grill_Italian_pizza} />
                <Card.Body className="d-flex justify-content-between">
                    <div className="d-flex flex-column flex-lg-row flex-lg-row">
                    <div className="d-flex flex-column text-start">
                        <Card.Title className='m-0' style={{fontSize:'medium'}}>Barbecue grill Pizza</Card.Title>
                        <span className='type' >medium</span>
                        <span  style={{fontSize:'small'}}>quantity : 3</span>
                    </div>
                    <span className='text-start mx-0 mx-lg-4'  style={{fontSize:'medium'}}>Total price<br/>2505/-</span>
                    </div>
                    <span style={{cursor:'pointer'}}><AiOutlineDelete/></span>
                </Card.Body>
                </Card>
                <Card className='m-1' style={{ width: '100%',display:'flex',flexDirection:'row' }}>
                <Card.Img className='cover' variant="top" src={Barbecue_grill_Italian_pizza} />
                <Card.Body className="d-flex justify-content-between">
                    <div className="d-flex flex-column flex-lg-row flex-lg-row">
                    <div className="d-flex flex-column text-start">
                        <Card.Title className='m-0' style={{fontSize:'medium'}}>Barbecue grill Pizza</Card.Title>
                        <span className='type' >medium</span>
                        <span  style={{fontSize:'small'}}>quantity : 3</span>
                    </div>
                    <span className='text-start mx-0 mx-lg-4'  style={{fontSize:'medium'}}>Total price<br/>2505/-</span>
                    </div>
                    <span style={{cursor:'pointer'}}><AiOutlineDelete/></span>
                </Card.Body>
                </Card>
            </Col>
            <Col className='right'>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title style={{ color: "#e95c4e" }}>Total Payable Amount</Card.Title>
                        <h2 className="mb-2 text-bold">9134/-</h2>
                        <Button style={{ background: "#e95c4e", border: "none" }} variant="primary">Pay Now</Button>
                    </Card.Body>
                    </Card>
                
                </Col>
        </Row>
        </Container>
    </Cart>
  )
}

export default CartPage

const Cart = styled.div`
padding: 4em 1em;
text-align: center;
.box{
    display: flex;
    gap: 1em;
    justify-content: center;
    flex-wrap: wrap;
    height: 70vh;
  overflow: hidden;
}

.cover{
    height: 6em !important;
    width: 6em !important;
    padding: 1em;
    margin: auto;
}
.type{
  font-size: small;
    font-weight: 300;
}
.right{
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin: 1em;
}
.left{
    height: 50vh;
    overflow: hidden;
    overflow-y: scroll;
}
.left::-webkit-scrollbar {
  width: 5px;     
  scroll-behavior: smooth;          /* width of the entire scrollbar */
}

.left::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.186);        /* color of the tracking area */
}

.left::-webkit-scrollbar-thumb {
  background-color: rgb(148, 232, 198);    /* color of the scroll thumb */
  border-radius: 20px;      
}
`

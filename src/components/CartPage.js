import Card from 'react-bootstrap/Card';
import styled from 'styled-components'
import { Container,Row,Col,Button,Toast,ToastContainer} from 'react-bootstrap';
import {AiOutlineDelete,AiOutlineShoppingCart} from 'react-icons/ai'

import { useApp } from '../context/context';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const CartPage = () => {
    const history = useNavigate();
    const [totalPrice, settotalPrice] = useState(0)
    const {cart,deleteCartItem,orders,setOrders,setCart} =useApp()
    const [loading, setloading] = useState(false)
    const deleteItem=async(id)=>{
        try {
            await deleteCartItem(id)
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        let price=0;
        if(cart.length){
            cart.forEach(i => {
                price+=(i.variableprice);
            });  
            settotalPrice(price)
        }
       
    }, [cart])
    const onPay=async()=>{
        try {
            setloading(true)
            const temp=orders;

            await setOrders([...cart,...temp])
            setloading(false)
            console.log('orders',orders)
            setCart([]);
            // history("/orders", { replace: true });

        } catch (error) {
            console.log(error.message)
        }
    }
    const [show, setShow] = useState(false);
    const [showW, setShowW] = useState(false);

  return (
    <Cart>
        <ToastContainer className="p-3" position='top-end'>
        <Toast  onClose={() => setShow(false)} show={show}  autohide
          className="d-inline-block m-1"
          bg='success'
          key={1}
          delay={2000} 
        >
          <Toast.Header>
            <strong className="me-auto">Success</strong>
            <small></small>
          </Toast.Header>
          <Toast.Body className='text-white'>
            Order Placed
          </Toast.Body>
        </Toast>
        </ToastContainer>
        <ToastContainer className="p-3" position='top-end'>
        <Toast  onClose={() => setShowW(false)} show={showW}  autohide
          className="d-inline-block m-1"
          bg='warning'
          key={1}
          delay={2000} 
        >
          <Toast.Header>
            <strong className="me-auto">Warning</strong>
            <small></small>
          </Toast.Header>
          <Toast.Body className='text-white'>
            Item removed
          </Toast.Body>
        </Toast>
        </ToastContainer>
      <Container>
        <h2 className='pb-5' style={{color:'red'}}>My Cart</h2>
        {
                cart.length>0?
        <Row >
            <Col sm={5} className='left'>
                {
                    cart.length>0?
                    cart.map((i,k)=>{
                        return <Card key={k} className='m-1' style={{ width: '100%',display:'flex',flexDirection:'row' }}>
                                <Card.Img className='cover' variant="top" src={i.preview} />
                                <Card.Body className="d-flex justify-content-between">
                                    <div className="d-flex flex-column flex-lg-row flex-lg-row">
                                    <div className="d-flex flex-column text-start">
                                        <Card.Title className='m-0' style={{fontSize:'medium'}}>{i.name}</Card.Title>
                                        <span className='type' >{i.type}</span>
                                        <span  style={{fontSize:'small'}}>Quantity : {i.quantity}</span>
                                    </div>
                                    <span className='text-start mx-0 mx-lg-4 '  style={{fontSize:'medium'}}>Total price<br/>₹{i.variableprice}/-</span>
                                    </div>
                                    <span  onClick={()=>{deleteItem(i.id);setShowW(true)}} style={{cursor:'pointer'}}><AiOutlineDelete/></span>
                                </Card.Body>
                                </Card>
                    }):<div>cart is empty</div>
                }
            </Col>
            <Col className='right'>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title style={{ color: "#e95c4e" }}>Total Payable Amount</Card.Title>
                        <h2 className="mb-2 text-bold">₹ {totalPrice}/-</h2>
                        <Button onClick={()=>{onPay();setShow(true)}} disable={loading} style={{ background: "#e95c4e", border: "none" }} variant="primary">Pay Now</Button>
                    </Card.Body>
                    </Card>
                
                </Col>
        </Row>:<Row> <div className="empty"><AiOutlineShoppingCart className='me-2'/>Cart is empty</div></Row>
            }
        </Container>
    </Cart>
  )
}

export default CartPage

const Cart = styled.div`
padding: 4em 1em;
padding-top: 1em;
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
    height: 53vh;
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
.empty{
    height: 100vh;
    margin: auto;
    font-size: xx-large;
    color: red;
    font-weight: 400;
}  

`

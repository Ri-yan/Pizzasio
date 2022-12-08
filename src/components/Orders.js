import Card from 'react-bootstrap/Card';
import styled from 'styled-components'
import { Container,Row,Col,Button } from 'react-bootstrap';
import { Barbecue_grill_Italian_pizza } from '../assets';
import {AiOutlineDelete,AiOutlineShoppingCart} from 'react-icons/ai'

import { useApp } from '../context/context';
import { useEffect, useState } from 'react';
const Orders = () => {
    const {orders} =useApp()
  return (
    <Order>
      <Container>
        <h2 className='pb-5' style={{color:'red'}}>My Orders</h2>
        {
                orders.length>0?
        <Row >
            <Col sm={5} className='left'>
                {
                    orders.map((i,k)=>{
                        return <Card key={k} className='m-1' style={{ width: '100%',display:'flex',flexDirection:'row' }}>
                                <Card.Img className='cover' variant="top" src={i.preview} />
                                <Card.Body className="d-flex justify-content-between flex-wrap">
                                    <div className="d-flex flex-column text-start">
                                        <Card.Title className='m-0' style={{fontSize:'medium'}}>{i.name}</Card.Title>
                                        <span className='type' >{i.type}</span>
                                        <span  style={{fontSize:'small'}}>Quantity : {i.quantity}</span>
                                    </div>
                                    <span className='text-start mx-0 mx-lg-4 ' style={{fontSize:'medium'}}><b>Total price</b><br/>₹ {i.variableprice}/-</span>
                                    <span className='text-start mx-0 mx-lg-4 ' style={{fontSize:'medium'}}><b>Status</b><br/>Ordered</span>
                                </Card.Body>
                                </Card>
                    })
                }
            </Col>
        </Row>:<Row> <div className="empty"><AiOutlineShoppingCart className='me-2'/>order is empty</div></Row>
            }
        </Container>
    </Order>
  )
}

export default Orders

const Order = styled.div`
padding: 4em 1em;
padding-top:2em ;
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

.left{
    height: 55vh;
    width: 100%;
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

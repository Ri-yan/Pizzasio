import  { useState } from 'react'
import { Col, Container, Row,Button,Accordion } from 'react-bootstrap'
import styled from 'styled-components'
import { Barbecue_grill_Italian_pizza, veg } from '../assets'
import {AiFillCaretLeft,AiFillCaretRight} from 'react-icons/ai'
const ProductPage = () => {
    const [counter, setCounter] = useState(1)
  return (
    <Product>
        <Container>
            <Row>
                <Col sm={5} md={5} lg={5}>
                    <img className='preview p-2 p-sm-2 p-md-1 p-lg-5' src={Barbecue_grill_Italian_pizza} alt="" />
                </Col>
                <Col className='right'>
                    <Row  className='my-2 ms-0'>
                        <Container>
                            <div className="d-flex justify-content-between">
                                <h2>Pizza Name</h2>
                                <img src={veg} alt="veg" style={{height:'25px',width:'25px'}} />
                            </div>
                        
                        <p>pizza description dfsgsdgsdfdfshfgdhrh fdgfdhrt</p>
                        <h2 className='mt-3 ms-0'>234/-</h2>
                        </Container>
                    </Row>
                    <Row className='my-3 ms-0' >
                       
                        <Container> 
                            {/* <h5>Size </h5> */}
                            <Button className='me-2 sbtn' style={{borderRadius:'3em'}}>small</Button>
                            <Button className='me-2 sbtn' style={{borderRadius:'3em'}}>medium</Button>
                            <Button className='me-2 sbtn' style={{borderRadius:'3em'}}>large</Button>
                        </Container>
                        
                    </Row>
                    <Row className='my-2 ms-0' >
                        
                        <Container className='d-flex align-items-center'>
                            {/* <div>Quantity</div> */}
                            <Button className='cbtn' disabled={counter>0?false:true} onClick={()=>setCounter(counter-1)}><AiFillCaretLeft/></Button>
                            <h6 className='mx-2 mt-3'>{counter}</h6> 
                            <Button  className='cbtn' onClick={()=>setCounter(counter+1)}><AiFillCaretRight/></Button>
                        </Container>
                    </Row>
                    <Row className='m-2 ms-0'>
                        <Container>
                            <Button className='me-2 buybtn' >Add to cart</Button>
                            {/* <Button>Buy</Button> */}
                        </Container> 
                    </Row>
                    <Row className='mt-5'>
                        <h6>Customizatons</h6>
                        <Container>
                        <Accordion defaultActiveKey={['4']} alwaysOpen>
                        <Accordion.Item eventKey="4">
                                <Accordion.Header>Opt veggies</Accordion.Header>
                                <Accordion.Body>
                                    <Button className='m-1 opbtn' >Tomatoes</Button>
                                    <Button className='m-1 opbtn' >Broccoli</Button>
                                    <Button className='m-1 opbtn' >Eggplant</Button>
                                    <Button className='m-1 opbtn' >Black Olives</Button>
                                    <Button className='m-1 opbtn' >Spinach</Button>
                                    <Button className='m-1 opbtn' >Onions</Button>
                                    <Button className='m-1 opbtn' >Bell peppers</Button>
                                    <Button className='m-1 opbtn' >Mushrooms</Button>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Base</Accordion.Header>
                                <Accordion.Body>
                                    <Button className='m-1 opbtn' >Thin Crust</Button>
                                    <Button className='m-1 opbtn' >Thick Crust</Button>
                                    <Button className='m-1 opbtn' >Stuffed Crust</Button>
                                    <Button className='m-1 opbtn' >Cracker Crust</Button>
                                    <Button className='m-1 opbtn' >Cheese Crust</Button>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Sause</Accordion.Header>
                                <Accordion.Body>
                                    <Button className='m-1 opbtn' >Mayonnaise</Button>
                                    <Button className='m-1 opbtn' >Barbecue Sauce</Button>
                                    <Button className='m-1 opbtn' >Honey</Button>
                                    <Button className='m-1 opbtn' >Garlic Paste</Button>
                                    <Button className='m-1 opbtn' >Sweet Chilly</Button>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Cheese</Accordion.Header>
                                <Accordion.Body>
                                    <Button className='m-1 opbtn' >Mozzarella</Button>
                                    <Button className='m-1 opbtn' >Parmesan</Button>
                                    <Button className='m-1 opbtn' >Romano</Button>
                                    <Button className='m-1 opbtn' >Fontina</Button>
                                    <Button className='m-1 opbtn' >Asiago</Button>
                                </Accordion.Body>
                            </Accordion.Item>
                            
                            </Accordion>
                        </Container>
                    </Row>
                </Col>
            </Row>
        </Container>
    </Product>
  )
}

export default ProductPage

const Product = styled.div`
.preview{
    /* padding: 2em; */
    height: auto;
    width: -webkit-fill-available;
}
.right{
    padding: 2em;
    height: 100vh;
    overflow: hidden;
    overflow-y: scroll;
}
.right::-webkit-scrollbar {
  width: 5px;     
  scroll-behavior: smooth;          /* width of the entire scrollbar */
}

.right::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.186);        /* color of the tracking area */
}

.right::-webkit-scrollbar-thumb {
  background-color: rgb(148, 232, 198);    /* color of the scroll thumb */
  border-radius: 20px;      
}
.sbtn{
    border-radius: 3em;
    background: red;
    border: none;
    font-size: smaller;
}
.opbtn{
    border-radius: 3em;
    border: none;
    font-size: smaller;
}
.buybtn{
    border-radius: 3em;
    background: red;
    border: none;
}
.cbtn{
    color: red;
    font-size: xx-large;
    border: none;
    padding: 0px;
    background: #d2691e00;
}
@media (max-width: 940px) {
    .right{
        height: 100%;
    }
    .preview{
        /* padding: 1em; */
    }
}
`

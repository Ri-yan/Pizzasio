import { Button, Container, Row, Table,Form } from 'react-bootstrap'
import styled from 'styled-components'

const Materials = () => {
  return (
    <Mat>
      <Container>
        <h2 className='text-center mb-4' style={{color:'red'}}>Materials Availability</h2>
        <Row>
          <h5 className='mb-3'>Base Availability</h5>
          <Table striped bordered hover responsive size="sm">
            <tbody>
            <tr>
              <th>Item</th>
              <th style={{textAlign: '-webkit-center'}}>Availability</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>Thin Crust</td>
              <td style={{textAlign: '-webkit-center'}}>
                <Form.Select className='w-10' aria-label="Default select example">
                  <option>select status</option>
                  <option value="A">Available</option>
                  <option value="NA">Not Available</option>
                </Form.Select></td>
              <td><Button className='ubtn' varient='primary'>Update</Button></td>
            </tr>
            <tr>
              <td>Thick Crust</td>
              <td style={{textAlign: '-webkit-center'}}>
                <Form.Select className='w-10' aria-label="Default select example">
                  <option>select status</option>
                  <option value="A">Available</option>
                  <option value="NA">Not Available</option>
                </Form.Select></td>
              <td><Button className='ubtn' varient='primary'>Update</Button></td>
            </tr>
            <tr>
              <td>Stuffed Crust</td>
              <td style={{textAlign: '-webkit-center'}}>
                <Form.Select className='w-10' aria-label="Default select example">
                  <option>select status</option>
                  <option value="A">Available</option>
                  <option value="NA">Not Available</option>
                </Form.Select></td>
              <td><Button className='ubtn' varient='primary'>Update</Button></td>
            </tr>
            <tr>
              <td>Cracker Crust</td>
              <td style={{textAlign: '-webkit-center'}}>
                <Form.Select className='w-10' aria-label="Default select example">
                  <option>select status</option>
                  <option value="A">Available</option>
                  <option value="NA">Not Available</option>
                </Form.Select></td>
              <td><Button className='ubtn' varient='primary'>Update</Button></td>
            </tr>
            <tr>
              <td>Cheese Crust</td>
              <td style={{textAlign: '-webkit-center'}}>
                <Form.Select className='w-10' aria-label="Default select example">
                  <option>select status</option>
                  <option value="A">Available</option>
                  <option value="NA">Not Available</option>
                </Form.Select></td>
              <td><Button className='ubtn' varient='primary'>Update</Button></td>
            </tr>
            </tbody>
          </Table>
        </Row>
        <Row>
          <h5 className='mb-3'>Sause Availability</h5>
          <Table striped bordered hover responsive size="sm">
            <tbody>
            <tr>
              <th>Item</th>
              <th style={{textAlign: '-webkit-center'}}>Availability</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>Mayonnaise</td>
              <td style={{textAlign: '-webkit-center'}}>
                <Form.Select className='w-10' aria-label="Default select example">
                  <option>select status</option>
                  <option value="A">Available</option>
                  <option value="NA">Not Available</option>
                </Form.Select></td>
              <td><Button className='ubtn' varient='primary'>Update</Button></td>
            </tr>
            <tr>
              <td>Barbecue Sauce</td>
              <td style={{textAlign: '-webkit-center'}}>
                <Form.Select className='w-10' aria-label="Default select example">
                  <option>select status</option>
                  <option value="A">Available</option>
                  <option value="NA">Not Available</option>
                </Form.Select></td>
              <td><Button className='ubtn' varient='primary'>Update</Button></td>
            </tr>
            <tr>
              <td>Honey</td>
              <td style={{textAlign: '-webkit-center'}}>
                <Form.Select className='w-10' aria-label="Default select example">
                  <option>select status</option>
                  <option value="A">Available</option>
                  <option value="NA">Not Available</option>
                </Form.Select></td>
              <td><Button className='ubtn' varient='primary'>Update</Button></td>
            </tr>
            <tr>
              <td>Garlic Paste</td>
              <td style={{textAlign: '-webkit-center'}}>
                <Form.Select className='w-10' aria-label="Default select example">
                  <option>select status</option>
                  <option value="A">Available</option>
                  <option value="NA">Not Available</option>
                </Form.Select></td>
              <td><Button className='ubtn' varient='primary'>Update</Button></td>
            </tr>
            <tr>
              <td>Sweet Chilly</td>
              <td style={{textAlign: '-webkit-center'}}>
                <Form.Select className='w-10' aria-label="Default select example">
                  <option>select status</option>
                  <option value="A">Available</option>
                  <option value="NA">Not Available</option>
                </Form.Select></td>
              <td><Button className='ubtn' varient='primary'>Update</Button></td>
            </tr>
            </tbody>
          </Table>
        </Row>
        <Row>
          <h5 className='mb-3'>Cheese Availability</h5>
          <Table striped bordered hover responsive size="sm">
            <tbody>
            <tr>
              <th>Item</th>
              <th style={{textAlign: '-webkit-center'}}>Availability</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>Mozzarella</td>
              <td style={{textAlign: '-webkit-center'}}>
                <Form.Select className='w-10' aria-label="Default select example">
                  <option>select status</option>
                  <option value="A">Available</option>
                  <option value="NA">Not Available</option>
                </Form.Select></td>
              <td><Button className='ubtn' varient='primary'>Update</Button></td>
            </tr>
            <tr>
              <td>Parmesan</td>
              <td style={{textAlign: '-webkit-center'}}>
                <Form.Select className='w-10' aria-label="Default select example">
                  <option>select status</option>
                  <option value="A">Available</option>
                  <option value="NA">Not Available</option>
                </Form.Select></td>
              <td><Button className='ubtn' varient='primary'>Update</Button></td>
            </tr>
            <tr>
              <td>Romano</td>
              <td style={{textAlign: '-webkit-center'}}>
                <Form.Select className='w-10' aria-label="Default select example">
                  <option>select status</option>
                  <option value="A">Available</option>
                  <option value="NA">Not Available</option>
                </Form.Select></td>
              <td><Button className='ubtn' varient='primary'>Update</Button></td>
            </tr>
            <tr>
              <td>Fontina</td>
              <td style={{textAlign: '-webkit-center'}}>
                <Form.Select className='w-10' aria-label="Default select example">
                  <option>select status</option>
                  <option value="A">Available</option>
                  <option value="NA">Not Available</option>
                </Form.Select></td>
              <td><Button className='ubtn' varient='primary'>Update</Button></td>
            </tr>
            <tr>
              <td>Asiago</td>
              <td style={{textAlign: '-webkit-center'}}>
                <Form.Select className='w-10' aria-label="Default select example">
                  <option>select status</option>
                  <option value="A">Available</option>
                  <option value="NA">Not Available</option>
                </Form.Select></td>
              <td><Button className='ubtn' varient='primary'>Update</Button></td>
            </tr>
            </tbody>
          </Table>
        </Row>
        <Row>
          <h5 className='mb-3'>Vegitables Availability</h5>
          <Table striped bordered hover responsive size="sm">
            <tbody>
            <tr>
              <th>Item</th>
              <th style={{textAlign: '-webkit-center'}}>Availability</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>Tomatoes</td>
              <td style={{textAlign: '-webkit-center'}}>
                <Form.Select className='w-10' aria-label="Default select example">
                  <option>select status</option>
                  <option value="A">Available</option>
                  <option value="NA">Not Available</option>
                </Form.Select></td>
              <td><Button className='ubtn' varient='primary'>Update</Button></td>
            </tr>
            <tr>
              <td>Broccoli</td>
              <td style={{textAlign: '-webkit-center'}}>
                <Form.Select className='w-10' aria-label="Default select example">
                  <option>select status</option>
                  <option value="A">Available</option>
                  <option value="NA">Not Available</option>
                </Form.Select></td>
              <td><Button className='ubtn' varient='primary'>Update</Button></td>
            </tr>
            <tr>
              <td>Eggplant</td>
              <td style={{textAlign: '-webkit-center'}}>
                <Form.Select className='w-10' aria-label="Default select example">
                  <option>select status</option>
                  <option value="A">Available</option>
                  <option value="NA">Not Available</option>
                </Form.Select></td>
              <td><Button className='ubtn' varient='primary'>Update</Button></td>
            </tr>
            <tr>
              <td>Black Olives</td>
              <td style={{textAlign: '-webkit-center'}}>
                <Form.Select className='w-10' aria-label="Default select example">
                  <option>select status</option>
                  <option value="A">Available</option>
                  <option value="NA">Not Available</option>
                </Form.Select></td>
              <td><Button className='ubtn' varient='primary'>Update</Button></td>
            </tr>
            <tr>
              <td>Spinach</td>
              <td style={{textAlign: '-webkit-center'}}>
                <Form.Select className='w-10' aria-label="Default select example">
                  <option>select status</option>
                  <option value="A">Available</option>
                  <option value="NA">Not Available</option>
                </Form.Select></td>
              <td><Button className='ubtn' varient='primary'>Update</Button></td>
            </tr>
            <tr>
              <td>Onions</td>
              <td style={{textAlign: '-webkit-center'}}>
                <Form.Select className='w-10' aria-label="Default select example">
                  <option>select status</option>
                  <option value="A">Available</option>
                  <option value="NA">Not Available</option>
                </Form.Select></td>
              <td><Button className='ubtn' varient='primary'>Update</Button></td>
            </tr>
            <tr>
              <td>Bell Peppers</td>
              <td style={{textAlign: '-webkit-center'}}>
                <Form.Select className='w-10' aria-label="Default select example">
                  <option>select status</option>
                  <option value="A">Available</option>
                  <option value="NA">Not Available</option>
                </Form.Select></td>
              <td><Button className='ubtn' varient='primary'>Update</Button></td>
            </tr>
            <tr>
              <td>Mushrooms</td>
              <td style={{textAlign: '-webkit-center'}}>
                <Form.Select className='w-10' aria-label="Default select example">
                  <option>select status</option>
                  <option value="A">Available</option>
                  <option value="NA">Not Available</option>
                </Form.Select></td>
              <td><Button className='ubtn' varient='primary'>Update</Button></td>
            </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
      
    </Mat>
  )
}

export default Materials

const Mat = styled.div`
height: 100vh;
overflow: hidden;
overflow-y: scroll;
margin: 2em auto;
padding: 1em;
::-webkit-scrollbar {display:none}
.w-10{
    width: 22vw;
}
.ubtn{
  background: red;
  border: none;
}
`
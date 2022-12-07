import { Container, Table,Form,Button} from "react-bootstrap";
import styled from "styled-components";

const OrdersInventory = () => {
  return (
    <OrIn>
        <Container>
        <h3 style={{color:'red'}} className="text-center">Orders Inventory</h3>
        <Table striped bordered hover responsive size="sm">
            <tbody>
            <tr>
                <th>Orders</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Status</th>
                <th>Placed at</th>
                <th>Action</th>
            </tr>
            <tr>
                <td className="w-10">1.green pepper zizza 2.chicken pizza</td>
                <td>John Dove</td>
                <td>212 bakers street</td>
                <td className="m-auto">
                    <Form.Select aria-label="Default select example">
                        <option>select status</option>
                        <option value="1">Ordered</option>
                        <option value="2">Placed</option>
                        <option value="3">On the way</option>
                        <option value="4">delivered</option>
                    </Form.Select>
                </td>
                <td>07:19pm</td>
                <td><Button className='ubtn' variant="primary">Update</Button></td>

            </tr>
            <tr>
                <td  className="w-10">1.green pepper zizza 2.chicken pizza 3.green pepper zizza 4.chicken pizza</td>
                <td>John Dove</td>
                <td>212 bakers street</td>
                <td className="m-auto">
                    <Form.Select aria-label="Default select example">
                        <option>select status</option>
                        <option value="1">Ordered</option>
                        <option value="2">Placed</option>
                        <option value="3">On the way</option>
                        <option value="4">delivered</option>
                    </Form.Select>
                </td>
                <td>07:19pm</td>
                <td><Button className='ubtn' variant="primary">Update</Button></td>

            </tr>
            </tbody>
        </Table>
        </Container>
        
    </OrIn>
  )
}

export default OrdersInventory

const OrIn = styled.div`
height: 100vh;
margin: 2em auto;
padding: 1em;
.w-10{
    width: 22vw;
}
.ubtn{
  background: red;
  border: none;
}
`
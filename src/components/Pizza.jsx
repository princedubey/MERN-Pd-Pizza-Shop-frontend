import Card from 'react-bootstrap/Card';
import { Row, Col, Button, Modal} from "react-bootstrap";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../action/cartAction';


const Pizza = ({pizza}) => {
  const [variant, setVariant] = useState('small')
  const [quantity, setQuantity] = useState(1)
  const [show, setShow] = useState(false);

  const dispatch = useDispatch()

  const addToCartHandler = () =>{
    dispatch(addToCart(pizza, quantity, variant))

  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='hover-zoom ripple ripple-surface ripple-surface-light' style={{ display:"flex", justifyContent:"center"}}>
    <Card style={{ width: '20rem', marginTop:'20px'}}>
      <Card.Img variant="top" src={pizza.image} style={{height:"180px", width:"100%", cursor:"pointer"}} 
      onClick= {handleShow}/>
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <Card.Text>
          <Row>
            <Col md={6}>
              <h6>Variant</h6>
              <select  value={variant} onChange={e => setVariant(e.target.value)}> 
              { pizza.varients.map( variant => 
              <option > {variant} </option>)}
              </select>
            </Col>
            <Col md={6} >
              <h6>Quantity</h6>
              <select value={quantity} onChange={e => setQuantity(e.target.value)}> 
              { [...Array(10).keys()].map( (v,i) => (
              <option value={i+1}> {i+1} </option>))}
              </select>
            </Col>
          </Row>
        </Card.Text>
        <Row>
            <Col md={5} style={{marginTop:'8px'}}>
              Price : {pizza.prices[0][variant] * quantity}
            </Col>
            <Col md={7}>
              <Button onClick={addToCartHandler} 
              className='bg-danger' >Add to cart</Button>
            </Col>
        </Row>      
      </Card.Body>
    </Card>

    {/* Model */}
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
          <Card.Img variant="top" src={pizza.image} style={{height:"230px"}} 
      onClick= {handleShow}/>
          </div>
          <div>
            <h5>Description:</h5>
            <p>{pizza.description}</p>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Pizza;
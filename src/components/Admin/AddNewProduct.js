import React, { Fragment, useState } from 'react'
import {Button,Col, Form, Row} from 'react-bootstrap';
import { addPizza } from "../../action/pizzaAction";
import Sidebar from './Sidebar'
import './mycss/designn.css'
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader'
import Success from '../Success'
import Error from '../Error'


const AddNewProduct = () => {
    const [name, setname] = useState("");
    const [smallPrice, setsmallPrice] = useState();
    const [largprice, setlargprice] = useState();
    const [mediumPrice, setmediumPrice] = useState();
    const [image, setimage] = useState("");
    const [description, setdescription] = useState("");
    const [category, setcategory] = useState("");

    const addPizzaState = useSelector((state) => state.addPizzaReducer);
    const { loading, error, success } = addPizzaState;
  
    const dispatch = useDispatch();
  
    const submitForm = (e) => {
      e.preventDefault();
      const pizza = {
        name,
        image,
        description,
        category,
        prices: {
          small: smallPrice,
          medium: mediumPrice,
          larg: largprice,
        },
      };
      console.log(pizza)
      dispatch(addPizza(pizza));
    };

  return (
    <>
        <Fragment>
        <div className='row'>
        <div class="col-18 col-md-2">
        <Sidebar/>
        </div>
       
         <div className='col-md-10 '>
         <div className="container container-fluid">
		<div className="row " >
         <div class="col-12">
                    <>
                    {loading && <Loader />}
                    {error && <Error error="add new pizza error" />}
                    {success && <Success success="Pizza Added Successfully" />}
                    <Form onSubmit={submitForm} className="bg-light p-4">
                        
                        <Form.Group className='mb-3' controlId="formGridEmail" >
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                            type="text"
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                            placeholder="Name of Product"
                            />
                        </Form.Group>
                        <Row>
                            <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Small Price</Form.Label>
                            <Form.Control
                                type="text"
                                value={smallPrice}
                                onChange={(e) => setsmallPrice(e.target.value)}
                                placeholder="Enter Small Price"
                            />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Medium Price</Form.Label>
                            <Form.Control
                                type="text"
                                value={mediumPrice}
                                onChange={(e) => setmediumPrice(e.target.value)}
                                placeholder="Enter medium price"
                            />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Larg Price</Form.Label>
                            <Form.Control
                                type="text"
                                value={largprice}
                                onChange={(e) => setlargprice(e.target.value)}
                                placeholder="Enter larg price"
                            />
                            </Form.Group>
                        </Row>
                        <Form.Group className='mb-3' controlId="formGridPassword">
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                            ttype="text"
                            value={image}
                            onChange={(e) => setimage(e.target.value)}
                            placeholder="Add Image URL"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            value={description}
                            onChange={(e) => setdescription(e.target.value)}
                            placeholder="Enter Description"
                        />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            type="text"
                            value={category}
                            onChange={(e) => setcategory(e.target.value)}
                            placeholder="Enter Category"
                        />
                        </Form.Group>

                        <Button variant="primary" type='submit' >
                        Add New
                        </Button>
                    </Form>
                   </>
               </div>
               </div>
            </div>
            </div>
        </div>
    </Fragment>
    </>
  )
}

export default AddNewProduct
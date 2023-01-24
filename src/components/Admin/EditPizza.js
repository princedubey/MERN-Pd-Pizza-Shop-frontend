import React, { Fragment, useEffect, useState } from 'react'
import {Button,Col, Form, Row} from 'react-bootstrap';
import Sidebar from './Sidebar'
import { useDispatch, useSelector } from "react-redux";
import './mycss/designn.css'
import { getPizzaById, updatePizza } from "../../action/pizzaAction";
import {useParams} from 'react-router-dom'
import Loader from "../Loader";
import Error from "../Error";
import Success from "../Success"


const EditPizza = () => {
  const params = useParams();

  const [name, setname] = useState("");
  const [smallPrice, setsmallPrice] = useState();
  const [largprice, setlargprice] = useState();
  const [mediumPrice, setmediumPrice] = useState();
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");

  const dispatch = useDispatch();
  const getPizzaByState = useSelector((state) => state.getPizzaByIdReducer);
  const { error, pizza } = getPizzaByState;
  const updatePizzaState = useSelector((state) => state.updatePizzaByIdReducer);
  const { updateloading, updatesuccess, updateerror } = updatePizzaState;

  useEffect(() => {
    if (pizza) {
      if (pizza._id === params.pizzaId) {
        setname(pizza.name);
        setdescription(pizza.description);
        setcategory(pizza.category);
        setimage(pizza.image);
        setsmallPrice(pizza.prices[0]["small"]);
        setmediumPrice(pizza.prices[0]["medium"]);
        setlargprice(pizza.prices[0]["large"]);
      } else {
        dispatch(getPizzaById(params.pizzaId));
      }
    } else {
      dispatch(getPizzaById(params.pizzaId));
    }
  }, [pizza, dispatch, params.pizzaId]);
  
  const submitForm = (e) => {
    e.preventDefault();
    const updatedPizza = {
      _id: params.pizzaId,  
      name,
      image,
      description,
      category,
      prices: {
        small: smallPrice,
        medium: mediumPrice,
        large: largprice,
      },
    };
    console.log(updatedPizza)
    dispatch(updatePizza(updatedPizza));
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
         <div class="col-12 ">
                    <>
                    {updateloading && <Loader />}
                    {updateerror && <Error error="add new pizza error" />}
                    {updatesuccess && <Success success="Pizza Added Successfully" />}

                    <Form onSubmit={submitForm} className="bg-light p-4">
                        <Form.Group as={Col} controlId="formGridEmail">
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
                        <Form.Group as={Col} controlId="formGridPassword">
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
                        Udate Pizza
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

export default EditPizza
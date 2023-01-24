  import React, { Fragment } from 'react'
  import Sidebar from './Sidebar'
  import {FaTrash,FaArrowLeft,FaEdit} from 'react-icons/fa'
  import {MDBCardBody,MDBCardImage,MDBCardText,MDBCol,MDBContainer,MDBIcon,MDBRow,MDBTypography} from "mdb-react-ui-kit";
  import './mycss/designn.css'
  
import {useDispatch, useSelector} from "react-redux"
import {deletePizza, getAllPizzas} from "../../action/pizzaAction"
import { useEffect } from 'react';
import loadImg from "../../pic/food.gif"
import { Link } from 'react-router-dom';

  const ProductList = () => {

    const dispatch = useDispatch()
    const pizzastate = useSelector(state => state.getAllPizaReducer)
    const {loading, pizzas, error} = pizzastate

    
  useEffect(() => {
    dispatch(getAllPizzas())
  },[dispatch]);
  
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

                     {
                        loading ? (<div style={{display: 'flex', justifyContent: 'center'}}>
                          <img src={loadImg} alt="loading" style={{height:'70vh'}}/>
                        </div>)
                                : error ? (<img src={loadImg} alt="loading" style={{height:'70vh'}}/>
                                )
                                : (
                                  <div>
                                        <MDBContainer className="h-100 ">
                                          <MDBRow className="justify-content-center align-pizzas-center h-100 ">
                                           <MDBCol>
                                              <MDBCardBody className="p-0 ">
                                                <MDBRow className="g-0 ">
                                                  <MDBCol >
                                                  
                                                    <div >
                                                    <div className="row">
                                                      <div className="col-xl-12 col-sm-12 ">
                                                          <div className="card text-white bg-dark o-hidden h-100">
                                                              <div className="card-body">
                                                                  <div className="text-center card-font-size">All Products
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                                        {
                                                    pizzas.map((pizza) => (
                                                    <>
                                                      <hr className="my-2 " />
                                                      <MDBRow className=" mb-1 d-flex justify-content-between align-pizzas-center">
                                                        <MDBCol md="1" lg="1" xl="1">
                                                          <MDBCardImage 
                                                            src={pizza.image}
                                                            fluid className="rounded-3" alt="Cotton T-shirt" />
                                                        </MDBCol>
                                                        <MDBCol md="3" lg="3" xl="3">
                                                        <MDBTypography tag="h6" className="text-black mb-0">
                                                        {pizza.name}
                                                          </MDBTypography>
                                                          <MDBTypography tag="h6" className="text-muted">
                                                            {pizza.category} 
                                                          </MDBTypography>
                                                        </MDBCol>
                                                       
                                                        <MDBCol md="3" lg="2" xl="4" className="text-end">
                                                          <MDBTypography tag="h6" className="text-muted">
                                                          Small: {pizza.prices[0]["small"]} 
                                                          <br/>
                                                          Medium: {pizza.prices[0]["medium"]}
                                                          <br/>
                                                          Large: {pizza.prices[0]["large"]}
                                                          </MDBTypography>
                                                        </MDBCol>
                                                        <MDBCol md="1" lg="1" xl="2" className="text-end">
                                                        <Link to={`/admin/editpizza/${pizza._id}`} className="text-muted mr-3">
                                                            <FaEdit fas icon="times" 
                                                            style={{cursor: "pointer", color:"green"}}/>
                                                          </Link>
                                                          <Link to="/admin/deletepizza" className="text-muted">
                                                            <FaTrash fas icon="times" 
                                                            style={{cursor: "pointer" ,color:"red"}}
                                                            onClick={ ()=>{dispatch(deletePizza(pizza._id))}}/>
                                                          </Link>
                                                        </MDBCol>
                                                      </MDBRow>


                                                      <hr className="my-4" />

                                                      
                                                      </>))
                                                    }
                                
                                                    </div>
                                                  
                                                  </MDBCol>
                                                  </MDBRow>
                                              </MDBCardBody>
                                          </MDBCol>
                                        </MDBRow>
                                      </MDBContainer>

                                  </div>
                                )
                       }  
                     
                     
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
  

export default ProductList
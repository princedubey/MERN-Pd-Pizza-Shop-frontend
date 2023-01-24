import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {FaMinus, FaPlus,FaTrash,FaArrowLeft} from 'react-icons/fa'
import {addToCart, deleteFromCart} from '../action/cartAction'
import {MDBCard,MDBCardBody,MDBCardImage,MDBCardText,MDBCol,MDBContainer,MDBIcon,MDBInput,MDBRow,MDBTypography} from "mdb-react-ui-kit";
import Checkout from '../components/Checkout';
import { Link } from 'react-router-dom';

const CartScreen = () => {

  const cartState = useSelector(state => state.cartReducer)
  const cartItems = cartState.cartItems;

  const dispatch = useDispatch()
  const subTotal = cartItems.reduce((x, item) => x+ item.price,0)

  return (
    <>
    
    <section className="h-100 h-custom" >
     <MDBContainer className="py-5 h-100">
      <MDBRow className="justify-content-center align-items-center h-100">
       <MDBCol size="12">
        <MDBCard className="card-registration card-registration-2" >
          <MDBCardBody className="p-0">
            <MDBRow className="g-0">
              <MDBCol lg="8">
              
                <div className="p-5">
                <div className="d-flex justify-content-between align-items-center mb-5">
                    <MDBTypography tag="h1" className="fw-bold mb-0 text-black">
                      Shopping Cart
                    </MDBTypography>
                    <MDBTypography className="mb-0 text-muted">
                    {cartState.cartItems.length} items
                    </MDBTypography>
                  </div>
                    {
                cartItems.map((item) => (
                <>
                  <hr className="my-4" />
                   <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                    <MDBCol md="2" lg="2" xl="2">
                      <MDBCardImage 
                        src={item.image}
                        fluid className="rounded-3" alt="Cotton T-shirt" />
                    </MDBCol>
                    <MDBCol md="3" lg="3" xl="3">
                    <MDBTypography tag="h6" className="text-black mb-0">
                    {item.name}
                      </MDBTypography>
                      <MDBTypography tag="h6" className="text-muted">
                        {item.varient} 
                      </MDBTypography>
                    </MDBCol>
                    <MDBCol md="3" lg="3" xl="2" className="d-flex align-items-center">
                    <FaMinus className='text-danger'
                          style={{cursor: "pointer", width:"30px"}}
                          onClick={ ()=>{dispatch(addToCart(item, item.quantity-1,item.varient))}}/>

                      <MDBInput type="number" min="0" value={item.quantity} size="sm" 
                      style={{width:"47px"}}/>

                      <FaPlus className='text-success'
                          style={{cursor: "pointer", width:"30px"}}
                          onClick={ ()=>{dispatch(addToCart(item, item.quantity+1,item.varient))}}/> 
                    </MDBCol>
                    <MDBCol md="3" lg="2" xl="4" className="text-end">
                      <MDBTypography tag="h6" className="text-muted">
                      {item.quantity} X {item.prices[0][item.varient]} = {" "}
                      Total: {item.price}
                      </MDBTypography>
                    </MDBCol>
                    <MDBCol md="1" lg="1" xl="1" className="text-end">
                      <a href="#!" className="text-muted">
                        <FaTrash fas icon="times" 
                        style={{cursor: "pointer"}}
                        onClick={ ()=>{dispatch(deleteFromCart(item))}}/>
                      </a>
                    </MDBCol>
                  </MDBRow>


                  <hr className="my-4" />

                  
                  </>))
                 }
                 <div className="pt-5">
                    <MDBTypography tag="h6" className="mb-0">
                      <Link tag="a" to="/" className="text-body">
                        <MDBIcon fas icon="long-arrow-alt-left me-2" /> Back
                        to shop
                      </Link>
                    </MDBTypography>
                  </div>
                </div>
              
              </MDBCol>
              <MDBCol lg="4" className="bg-grey" style={{background:"#d2d2e0"}}>
                <div className="p-5">
                  <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1">
                    Summary
                  </MDBTypography>

                  <hr className="my-4" />

                  <div className="d-flex justify-content-between mb-4">
                    <MDBTypography tag="h5" className="text-uppercase">
                      items {cartState.cartItems.length}
                    </MDBTypography>
                    <MDBTypography tag="h5">Rs: {subTotal}.00</MDBTypography>
                  </div>

                  <MDBTypography tag="h5" className="text-uppercase mb-3">
                    Shipping
                  </MDBTypography>

                  <div className="mb-4 pb-2">
                    <select className="select p-2 rounded bg-grey" style={{ width: "100%" }}>
                      <option value="2">Free-Delivery</option>
                      <option value="1">Standard-Delivery- Rs-50.00</option>
                    </select>
                  </div>

                  <MDBTypography tag="h5" className="text-uppercase mb-3">
                    Give code
                  </MDBTypography>

                  <div className="mb-5">
                    <MDBInput size="lg" label="Enter your code" />
                  </div>

                  <hr className="my-4" />

                  <div className="d-flex justify-content-between mb-5">
                    <MDBTypography tag="h5" className="text-uppercase">
                      Total price
                    </MDBTypography>
                    <MDBTypography tag="h5">Rs: {subTotal}.00</MDBTypography>
                  </div>
                  <Checkout subTotal = {subTotal}/>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</section>
    </>
  )
}

export default CartScreen

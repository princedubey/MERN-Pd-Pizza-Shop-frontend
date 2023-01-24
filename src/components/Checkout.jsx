import React from 'react'
import { Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import Loader from '../components/Loader'
import {placeOrder} from '../action/orderAction'
import Error from './Error';
import Success from './Success';

const Checkout = ({subTotal}) => {

  const orderState = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderState;

    const dispatch = useDispatch();
    const tokenHandler =(token)=>{
        dispatch(placeOrder(token, subTotal))
        console.log(token)
    }
  return (
    <>
      {loading && <Loader />}
      {error && <Error error="something went wrong" />}
      {success && <Success success="order placed success" />}
      
      <StripeCheckout 
      amount={subTotal * 100}
      shippingAddress
      token={tokenHandler}
      stripeKey='pk_test_51MEYfeSGYit2VaN0jbu63X7Bi3qqfUVk2XYq8KFsXFNZZEQGPrGCMoQTuVMAhRCo1hRWHCwk84ch5lOHQ4G5fAIx00U3fuhNKx'
      currency='INR'
      >
      <Button  size="lg">
        Pay Now <FaArrowRight/>
      </Button>
      </StripeCheckout>
    </>  
  )
}

export default Checkout

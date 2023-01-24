import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux"
import Pizza from '../components/Pizza'
import {getAllPizzas} from "../action/pizzaAction"
import { useEffect } from 'react';
import loadImg from "../pic/food.gif"
import Filters from '../components/Filters';

const HomeScreen = () => {
  const dispatch = useDispatch()
  const pizzastate = useSelector(state => state.getAllPizaReducer)
  const {loading, pizzas, error} = pizzastate

  useEffect(() => {
    dispatch(getAllPizzas())
  },[dispatch]);

  return (
    <>

      <Container>
        {
          loading ? (<div style={{display: 'flex', justifyContent: 'center'}}>
            <img src={loadImg} alt="loading" style={{height:'70vh'}}/>
          </div>)
                  : error ? (<img src={loadImg} alt="loading" style={{height:'70vh'}}/>
                  )
                  : (
                  <Row>
                    <Filters/> 
                    { pizzas.map((pizza) => {
                    return(
                    <Col md={4} key={pizza.name}>
                    <Pizza pizza={pizza}/>
                    </Col>
                    )})}
                    </Row>
                    )
          }  
      </Container>
    </>
  )
}

export default HomeScreen

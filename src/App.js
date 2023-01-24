import React from 'react'
import './App.css'
import {Route, Routes } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Policy from './components/Policy'
import CartScreen from './screens/CartScreen'
import HomeScreen from './screens/HomeScreen' 
import LoginScreen from './screens/LoginScreen' 
import Registration from './screens/Registration'
import NavBar from './components/NavBar'
import OrderScreen from './screens/OrderScreen'
import Dashboard from './components/Admin/Dashboard'
import OrderList from './components/Admin/OrderList'
import UserList from './components/Admin/UserList'
import ProductList from './components/Admin/ProductList'
import AddNewProduct from './components/Admin/AddNewProduct'
import EditPizza from './components/Admin/EditPizza'


const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<HomeScreen/>} exact/>
      <Route path='/registration' element={<Registration/>} exact/>
      <Route path='/login' element={<LoginScreen/>} exact/>
      <Route path='/about' element={<About/>} exact/>
      <Route path='/contact' element={<Contact/>} exact/>
      <Route path='/policy' element={<Policy/>} exact/>
      <Route path='/cart' element={<CartScreen/>} exact/>
      <Route path='/orders' element={<OrderScreen/>} exact/>
      
      <Route path='/admin' isAdmin={true}  element={<Dashboard/>} exact/>
      <Route path='/admin/orderlist' isAdmin={true}  element={<OrderList/>} exact/>
      <Route path='/admin/userslist' isAdmin={true}  element={<UserList/>} exact/>
      <Route path='/admin/productslist' isAdmin={true}  element={<ProductList/>} exact/>
      <Route path='/admin/addnewproduct' isAdmin={true}  element={<AddNewProduct/>} exact/>
      <Route path='/admin/editpizza/:pizzaId' isAdmin={true}  element={<EditPizza/>} exact/>

   
    </Routes>
    </>
  )
}

export default App

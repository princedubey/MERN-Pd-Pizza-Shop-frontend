import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {logoutUser} from "../action/userAction"
import {NavLink} from "react-router-dom"

const NavBar = () => {
const dispatch = useDispatch();

  const cartState = useSelector((state) => state.cartReducer)
  const userState = useSelector((state) => state.loginUserReducer);

  const {currentUser} = userState
  return (
    <>
      <nav className="navbar navbar-expand-lg shadow-sm  p-3 mb-2 bg-white rounded">
        <NavLink className="navbar-brand" to="/">
          <span style={{color:"red"}}>
          PD
          </span>
         PIZZA
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink> 
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">
                <div className="topBarIcon">
                  <i className="fas fa fa-shopping-cart fa-lg" style={{ fontWeight:"800", fontSize:"24px"}}></i>
                  <span className="iconBadgee">{cartState.cartItems.length}</span>
                </div>
              </NavLink>
            </li>
            {
              
              currentUser ? (
              <>
              <Nav>
              <NavDropdown
                  id="nav-dropdown-dark-example"
                  title={currentUser.name}
                  menuVariant="dark"
                >
               <NavDropdown.Item href="/cart">Cart</NavDropdown.Item>
               <NavDropdown.Item href="/orders">Orders</NavDropdown.Item>
               <NavDropdown.Divider />
               <NavDropdown.Item onClick={()=>{dispatch(logoutUser())
              }}>Logout</NavDropdown.Item>
             </NavDropdown>
             </Nav>
              </>
              ) : (<>
              <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/registration">
                Signup
              </NavLink>
            </li></>)
            }
           
            <li className="nav-item">
              <NavLink className="nav-link" to="/policy">
                Term & policy
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

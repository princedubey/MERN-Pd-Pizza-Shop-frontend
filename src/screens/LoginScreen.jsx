import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { loginUser } from '../action/userAction';
import {useDispatch} from 'react-redux'

const LoginScreen =()=> {
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const dispatch = useDispatch();
 
  useEffect(() => {
    if(localStorage.getItem('currentUser')){
      window.location.href="/"
    }
  
  }, [])

  const loginHandler = () =>{
    const user = {email, password}
    dispatch(loginUser(user))
  }
  
  return (
    <>
    <div className="d-flex justify-content-center align-items-center mb-5 fs-4 ">
    <span style={{color:"red"}}>
          Log
          </span>
         in        
     </div>
    <Container style={{maxWidth:"150vh", marginTop:"5vh"}}>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
        value={email}
        onChange={(e)=> setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
        value={password}
        onChange={(e)=> setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      <Button variant="danger"  style={{width:"100%"}}
      onClick={loginHandler}>
        Login
      </Button>
    </Form>
    </Container>
    </>
  );
}

export default LoginScreen;
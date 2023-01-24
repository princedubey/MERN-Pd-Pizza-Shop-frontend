import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch} from 'react-redux'
import {registerUser} from '../action/userAction'

function Registration() {

  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [confirmPassword , setConfirmPassword] = useState('')

  const dispatch = useDispatch()

  const registerHandler = () =>{
    if(password !== confirmPassword){
      alert("Password do not match")
    }else{
      const user = {name , email , password, confirmPassword}
      dispatch(registerUser(user));
      alert("Registration Sucessful")
    }

  }

  return (
    <>
    <div className="d-flex justify-content-center align-items-center mb-5 fs-4">
    <span style={{color:"red"}}>
          Sign
          </span>
         up        
     </div>
    <Container style={{maxWidth:"150vh", marginTop:"5vh"}}>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter name" 
        value={name} onChange={e => setName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
        value={email} onChange={e => setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
        value={password} onChange={e => setPassword(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCnfPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
        value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
      </Form.Group>
      <Button variant="danger"  style={{width:"100%"}}
      onClick={registerHandler}>
        Register
      </Button>
    </Form>
    </Container>
    </>
  );
}

export default Registration;
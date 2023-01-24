import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { Table } from "react-bootstrap";
import { deleteUser, getAllUsers } from "../../action/userAction";
import Loader from "../Loader";
import Error from "../Error";
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import './mycss/designn.css'
import { Fragment } from "react";

const UserList = () => {
    const userState = useSelector((state) => state.getAllUsersReducer);
    const { loading, error, users } = userState;
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  
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
                            <h1>User List</h1>
                {loading && <Loader />}
                {error && <Error error="Error While Fetching Users" />}
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users &&
                        users.map((user) => (
                        <tr key={user._id}>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                            <AiFillDelete
                                style={{ color: "red", cursor: "pointer" }}
                                onClick={() => {
                                dispatch(deleteUser(user._id));
                                }}
                            />
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </Table>
               
               </div>
               </div>
            </div>
            </div>
        </div>
    </Fragment>
    </>
  )
}

export default UserList
import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>

      <div className="row" style={{display:"flex"}}>
        <div className="col">
            <div className="sidebar-wrapper">
                <nav id="sidebar">
             
        
                    <ul className="list-unstyled components">
                    <li>
                        <Link to="/admin"><i className="fa fa-tachometer-alt"></i> Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/admin/productslist"><i className="fab fa-product-hunt"></i>Products</Link>
                    </li>
                    <li>
                        <Link to="/admin/addnewproduct"><i className="fab fa-product-hunt"></i>Add Products</Link>
                    </li>
                    <li>
                        <Link to="/admin/orderlist"><i className="fa fa-shopping-basket"></i> Orders</Link>
                    </li>

                    <li>
                        <Link to="/admin/userslist"><i className="fa fa-users"></i> Users</Link>
                    </li>
            
                </ul>
                </nav>
            </div>
        </div>
    </div>
    </>
  )
}

export default Sidebar

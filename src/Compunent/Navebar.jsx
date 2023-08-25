import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import'./Login.css'

const Navebar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top " >
  <div className="container-fluid">
    <Link style={{marginLeft:"8rem"}} className="navbar-brand" to="/">Student Mng System</Link>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className=" " style={{marginRight:"8rem"}} >
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        <Link className="nav-link" to="/login">Login</Link>
        <Link className="nav-link" to="/signup">Signup</Link>
      </div>
    </div>
  </div>
</nav>
      
    </>
  )
}

export default Navebar;

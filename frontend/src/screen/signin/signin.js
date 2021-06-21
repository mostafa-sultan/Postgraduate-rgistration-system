import React, { useState } from 'react'
import './style.css'
import { Link, NavLink,useHistory } from "react-router-dom";
import axios from 'axios';
// import { useHistory } from "react-router-dom";
    

function Signin(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
   let history = useHistory();
 
   const handleSubmit = (evt) => {  
    console.log(email)
    console.log(pass)
    evt.preventDefault();  
    axios.get(`http://localhost:3000/login/`+email+"/"+pass)
    .then(res => {  


      const newWindow = window.open(res.data, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
      // history.push('/res.data')

      console.log(res.data)
    })
  }
  return (

    <div id="main-wrapper" className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10">
          <div className="card border-0">
            <div className="card-body p-0">
              <div className="row no-gutters">
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="mb-5">
                      <h3 className="h4 font-weight-bold text-theme">Login</h3>
                    </div>
                    <h6 className="h5 mb-0">Welcome back!</h6>
                    {/* <p className="text-muted mt-2 mb-5">Enter your email address and password to access admin panel.</p> */}
                    <form onSubmit={handleSubmit} >
                      <div className="form-group"><label htmlFor="exampleInputEmail1">Email address</label> <input id="exampleInputEmail1" className="form-control" type="email" onChange={e => setEmail(e.target.value)} /></div>
                      <div className="form-group mb-5"><label htmlFor="exampleInputPassword1">Password</label> <input id="exampleInputPassword1" className="form-control" type="password" onChange={e => setPass(e.target.value)}/></div>
                      <button className="btn btn-secondary" type="submit">Login</button>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-none d-lg-inline-block">
                  <div className="account-block rounded-right">
                    <div className="overlay rounded-right">&nbsp;</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-muted text-center mt-3 mb-0">Don't have an account? <NavLink className="text-primary ml-1" to="/register"> register </NavLink></p>
        </div>
      </div>
    </div>

  )
}

export default Signin
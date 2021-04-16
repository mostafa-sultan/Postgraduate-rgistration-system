import React from 'react'
import './style.css'
import { Link, NavLink } from "react-router-dom";

function Signup() {
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
                  <h3 className="h4 font-weight-bold text-theme">Register</h3>
                </div>
                <h6 className="h5 mb-0">Just Do Register.</h6>
                <p className="text-muted mt-2 mb-5">If You Really Want To Know, Look In The Register.</p>
                <form>
                  <div className="form-group"><label htmlFor="yourName">Your name</label> <input id="yourName" className="form-control" type="text" /></div>
                  <div className="form-group"><label htmlFor="exampleInputEmail1">Email address</label> <input id="exampleInputEmail1" className="form-control" type="email" /></div>
                  <div className="form-group mb-5"><label htmlFor="exampleInputPassword1">Password</label> <input id="exampleInputPassword1" className="form-control" type="password" /></div>
                  <button className="btn btn-secondary" type="submit">Register</button></form></div>
            </div>
            <div className="col-lg-6 d-none d-lg-inline-block">
              <div className="account-block rounded-right">
                <div className="overlay rounded-right">&nbsp;</div>
                <div className="account-testimonial">
                  <h4 className="text-theme mb-4">This beautiful theme yours!</h4>
                  <p className="lead text-theme">"Best investment i made for a long time. Can only recommend it for other users."</p>
                  <p>- Admin User</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <p className="text-muted text-center mt-3 mb-0">Already have an account?  <NavLink className="text-primary ml-1" to="/login">  login </NavLink></p>
    </div>
  </div>
</div>

    )
}

export default Signup
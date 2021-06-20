import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        PGS
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          
        <li className="nav-item">
            <NavLink className="nav-link" to="/register">
              register
            </NavLink>
          </li>


          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
             login
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/student">
            student
            </NavLink>
          </li>

        <li className="nav-item">
            <NavLink className="nav-link" to="/empAplication">
              employe
            </NavLink>
          </li>
           <li className="nav-item">
            <NavLink className="nav-link" to="/admin">
              admin
            </NavLink>
          </li>



        </ul>
      </div>
 
    </nav>
  );
};

export default NavBar;

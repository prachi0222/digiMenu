import React from 'react'
import "./common.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">

        <Link className="navbar-brand" to="/">
          DigiMenu <i className="fas fa-utensils"></i>
        </Link>

        <div className="navbar-nav ms-auto">
          <Link className="nav-link" to="/">
            Home
          </Link>

          <Link className="nav-link" to="/menu/6a1ed40d5b2cc073a47ab395">
            Menu
          </Link>
          <Link className="nav-link" to="/admin">
            Admin
          </Link>
        </div>

      </div>
    </nav>
  )
  
}

export default Navbar
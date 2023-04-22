import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item">
            <img
              src={logo}
              width="50"
              style={{ maxHeight: "100px", marginRight:"12px" }}
            />
            <h2>
              <b> Trading Tool </b>
            </h2>
          </Link>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">Home</Link>
            <Link to="/features" className="navbar-item">Features</Link>
            <Link to="/aboutus" className="navbar-item">About Us</Link>
            <Link to="/contact" className="navbar-item">Contact Us</Link>
            <Link to="/tradeform" className="navbar-item">TradeForm</Link>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link to="/login" className="button is-primary"><strong>Log In</strong></Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

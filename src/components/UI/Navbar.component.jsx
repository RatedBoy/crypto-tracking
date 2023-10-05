import React from "react";
import { useRef } from "react";
import { Link } from 'react-router-dom';
import { FaCoins } from 'react-icons/fa';
import "./Navbar.css";



const NavbarComponent = () => {

  const btnToggleRef = useRef();

  const ToggleBTN = () => {
    btnToggleRef.current.click();
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div>
          <FaCoins className="navbar-logo-icon" />
          <span className="navbar-logo-text">RatedCT</span>

        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          ref={btnToggleRef}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={ToggleBTN}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/faq" onClick={ToggleBTN}>
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us" onClick={ToggleBTN}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us" onClick={ToggleBTN}>
                Contact Us
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;

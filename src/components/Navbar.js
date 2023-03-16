import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home<span class="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/buyhouse">
              Buy
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/renthouse">
              Rent
            </a>
          </li>

          <li class="nav-item">
            <a className="nav-link" href="/adcreate">
              Advertise
            </a>
          </li>
          <button className="btn-login">
            <a className="nav-link" href="/login">
              Login
            </a>
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  
  return (
    <nav className="nav d-flex justify-content-between">

          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/rent">Rent</Nav.Link>
          <Nav.Link href="/sell">Sell</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/service">Service</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/adcreate">AdCreate</Nav.Link>

          
    
    </nav>
  );
}

export default NavBar;

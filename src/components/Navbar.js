import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  
  return (
    <nav className="nav flex space-x-10">

          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/buy">Buy</Nav.Link>
          <Nav.Link href="/rent">Rent</Nav.Link>
          <Nav.Link href="/sell">Sell</Nav.Link>
        
         
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/adcreate">AdCreate</Nav.Link>

          
    
    </nav>
  );
}

export default NavBar;
  
  
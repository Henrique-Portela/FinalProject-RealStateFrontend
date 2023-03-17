import React, { useContext, useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AuthContext from "../context/AuthContext";
import LogOut from "./LogOut";


function NavBar() {

  /* const {token} = useContext(AuthContext) */

    const  [token, setToken] = useState()
  

   useEffect(() => {
    const userToken = localStorage.getItem('token')
      setToken(userToken)
   },[]) 
   console.log(token)
  return (
    <nav className="nav flex space-x-10">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/buyhouse">Buy</Nav.Link>
      <Nav.Link href="/renthouse">Rent</Nav.Link>
      <Nav.Link href="/adcreate">Advertise</Nav.Link>
       { token ? <Nav.Link href="/manageitens">Manageitens</Nav.Link> : null }
      
      <div className="login-button">
        { token ? <LogOut /> : <Nav.Link href="/login">Sign in</Nav.Link>}

      
      </div>
    </nav>
  );
}

export default NavBar;

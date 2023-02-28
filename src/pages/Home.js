import React from 'react'
import logo from "../img/logo.jpeg"

const Home = () => {
  return (
   <div className="hero-image">
    <img src={logo} alt="logo" width= "100%" />
    <div class="hero-text">
    <h1> Find it. Tour it. Own it.</h1>
    <p>“Relationships Built on Trust”</p>
    <button className="buy" space-between = "2px">Buy</button>
    <button> Rent</button>
    </div>
    </div>
   
  )
}

export default Home
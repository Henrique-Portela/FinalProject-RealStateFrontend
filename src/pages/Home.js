import React, { useEffect, useState } from 'react'
import HouseCard from '../components/HouseCard'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import Img from '../Img/home.jpeg'

const Home = () => {
  const [house, setHouse] = useState([])

  const url = 'http://localhost:3001/viewhouse'

  useEffect(() => {
    async function fetchHouse() {
      try {
        const response = await axios.get(url)
        console.log(response.data)
        setHouse(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchHouse()
  }, [])

  return (
    <>
      <div className="hero-image">
        <img className="img" src={Img} alt="Home" widht="100px" height="120%" />
        <p> New Listings in Aledo,TX</p>
        <div className="hero-text">
          <h1> Find it. Tour it. Own it.</h1>
          <p>“Relationships Built on Trust”</p>
          <input type="text" name="search" placeholder="Enter an address, neighborhood, city, or ZIP code" />
        </div>
      </div>
      <Row>
        {house.map((houseAtual) => {
          return (
            <Col>
              <Link to={`/housedetails/${houseAtual._id}`}>
                <HouseCard
                  address={houseAtual.address}
                  sellRent={houseAtual.sellRent}
                  builYear={houseAtual.builYear}
                  picture={houseAtual.picture}
                />
              </Link>
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default Home

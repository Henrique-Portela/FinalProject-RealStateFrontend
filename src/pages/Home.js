import React, { useEffect, useState } from 'react'
import HouseCard from '../components/HouseCard'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import Img from '../Img/home.jpeg'

const Home = () => {
  const [house, setHouse] = useState([])
  const [filteredHouses, setFilteredHouses] = useState([])
  const [search, setSearch] = useState('')

   const addressSearch = (value) => {
    setSearch(value)
    console.log(filteredHouses)
    const result = filteredHouses.filter((house) => {
    if (house.street.toLowerCase().includes(search.toLowerCase) || 
       house.neighborhood.toLowerCase().includes(search.toLowerCase) || 
       house.city.toLowerCase().includes(search.toLowerCase) || 
       house.state.toLowerCase().includes(search.toLowerCase) || 
       house.zipCode.toLowerCase().includes(search.toLowerCase)) {
        
    } return result
  })
  } 

  const url = 'http://localhost:3001/viewhouse'

  useEffect(() => {
    async function fetchHouse() {
      try {
        const response = await axios.get(url)
        console.log(response.data)
        setHouse(response.data)
        setFilteredHouses(response.data)
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
          <input type="text"
                  value= { search }
                  onChange= {(e) => addressSearch(e.target.value)}
                 name="search" 
                 placeholder="Enter an address, neighborhood, city, or ZIP code" />
        </div>
      </div>
      <Row>
        {filteredHouses.map((houseAtual) => {
          return (
            <Col>
              
                <HouseCard
                  address={houseAtual.address}
                  sellRent={houseAtual.sellRent}
                  builYear={houseAtual.builYear}
                  picture={houseAtual.picture}
                />
            
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default Home

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
    setSearch(value);
    console.log(filteredHouses)
    if(!value){
      setFilteredHouses(house)
      return
    }
      const result = filteredHouses.filter((houses) => {
        return (houses.address.street.toLowerCase().includes(search.toLowerCase())  || 
                houses.address.neighborhood.toLowerCase().includes(search.toLowerCase()) || 
                houses.address.city.toLowerCase().includes(search.toLowerCase()) || 
                houses.address.state.toLowerCase().includes(search.toLowerCase())) 
      })
      
      setFilteredHouses(result)
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
          <input  type="text"
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
                  house={houseAtual}
                />
            
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default Home

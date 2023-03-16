import React, { useEffect, useState } from 'react'
import HouseCard from '../components/HouseCard'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import Img from '../Img/rentphoto.jpeg'


const RentHouse = () => {
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
   
      <div className="hero-image-rent">
        <img className="img" src={Img} alt="Home" />
        <p> Rental Listings</p>
        <div className="hero-text-rent">
          <h1> Real Estate</h1>
          <p>“Relationships Built on Trust”</p>
          
        </div>
      </div>
      
      <Row>
        {filteredHouses.map((houseAtual) => {
          if(houseAtual.sellRent === 'rent')
          return (
            <Col>
              <Link to = {`/housedetails/${houseAtual._id}`}>
                <HouseCard
                  house={houseAtual}
                />
              </Link>


            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default RentHouse

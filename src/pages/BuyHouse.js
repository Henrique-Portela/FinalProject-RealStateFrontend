import React, { useEffect, useState } from 'react'
import HouseCard from '../components/HouseCard'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import Img from '../Img/buyphoto.jpeg'


const BuyHouse = () => {
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
      <div className="hero-image-buy">
        <img className="imgbuy" src={Img} alt="Homebuy"/>
        <p> <b>Homes for Sale</b></p>
        <div className="hero-text-buy">
          <h1>Discover your perfect home®</h1>
          
          <div class="input-group">
            <div class="form-outline">
              <div class="form-outline">
                <input
                  type="text"
                  value={search}
                onChange={(e) => addressSearch(e.target.value)}
                placeholder="Address, neighborhood, city, State"
                  id="form1"
                  className="form-control-nav"
                  
            
                  aria-label="Search"
                />
              </div>
             
            </div>
          </div>
        </div>
      </div>
      
      <Row>
        {filteredHouses.map((houseAtual) => {
          if(houseAtual.sellRent === 'sell')
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

export default BuyHouse


import React, { useEffect, useState } from 'react'
import HouseCard from '../components/HouseCard'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Video from '../Video/video.mp4'
import { Link } from 'react-router-dom'

const Home = () => {
  const [house, setHouse] = useState([]);

  const url = "http://localhost:3001/viewhouse"

  useEffect(() => {
    async function fetchHouse() {
      try {
        const response = await axios.get(url);
        console.log(response.data);
        setHouse(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchHouse();
  }, []);

  return (
    <>
      <div className="hero-image">
        <video src={Video} autoPlay loop muted width="100%" />
        <p> New Listings in Aledo,TX</p>
        <div className="hero-text">
          <h1> Find it. Tour it. Own it.</h1>
          <p>“Relationships Built on Trust”</p>
          <button className="sell" space-between="2px">
            Sell
          </button>
          <button> Rent</button>
        </div>
      </div>
      <Row>
        {house.map((houseAtual) => {
          return (
            <Col>
            <Link to= {`/housedetails/${houseAtual._id}`} >
              <HouseCard
                address={houseAtual.address}
                sellRent={houseAtual.sellRent}
                builYear={houseAtual.builYear}
                picture={houseAtual.picture}
              
              />
               </Link>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Home;

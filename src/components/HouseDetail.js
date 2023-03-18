import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Carousel from "react-bootstrap/Carousel";
import "../StyleCss/Carousel.css";

function HouseDetail() {
  const [house, setHouse] = useState();
  const { id } = useParams();

  const token = localStorage.getItem("token");

  const headers = {
    Authorization: "Bearer " + token,
  };

  useEffect(() => {
    async function fetchHouse() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/viewhouse/${id}`,
          { headers }
        );
        console.log(response.data);
        setHouse(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchHouse();
  }, [id]);

  if (!house) {
    return <p>loading</p>;
  }
  console.log(house);
  return ( 
    <>
{/*       <Card style={{ width: "15rem" }}>
      <Card.Img
        style={{ height: "19np8.81px" }}
        variant="top"
        src={house.picture[0]}
      />
      <div className="card-title">
        <h3>{house.address.street}</h3>
      </div>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className="list-group-item card">
          {house.houseSize}
        </ListGroup.Item>
        <ListGroup.Item className="list-group-item card">
          BedRooms: {house.bedRooms}
        </ListGroup.Item>
        <ListGroup.Item className="list-group-item card">
          Baths:{house.baths}
        </ListGroup.Item>
        <ListGroup.Item className="list-group-item card">
          HouseSize:{house.houseSize}
        </ListGroup.Item>
        <ListGroup.Item className="list-group-item card"/>
          Price:{house.price}
        </ListGroup>
      </Card>  */}
    <div className="cardDetail">
      <Card className="card">
        <Carousel className="carousel" style={{ objectFit: "cover" }} variant="top"
        >
          <Carousel.Item>
            <img className="d-block" src={house.picture[0]} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={house.picture[1]} alt="Second slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={house.picture[2]} alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <div className="card-title">
        </div>
        <ListGroup>
        <ListGroup.Item>BedRooms: {house.bedRooms}
        </ListGroup.Item>
        <ListGroup.Item>Baths:{house.baths}</ListGroup.Item>
         <ListGroup.Item>Address: {house.address.street}</ListGroup.Item>
          <ListGroup.Item>Neighborhood: {house.address.neighborhood}</ListGroup.Item>
          <ListGroup.Item>City: {house.address.city}</ListGroup.Item>
          <ListGroup.Item>State: {house.address.state}</ListGroup.Item>
          <ListGroup.Item>Zip code: {house.address.zipCode}</ListGroup.Item>
          <ListGroup.Item> HouseSize:{house.houseSize}</ListGroup.Item>
          <ListGroup.Item>Year: {house.builtYear}</ListGroup.Item>
          <ListGroup.Item>Price:{house.price}</ListGroup.Item>
        </ListGroup>    
      </Card>
    </div>
    </>
  );
}

export default HouseDetail;

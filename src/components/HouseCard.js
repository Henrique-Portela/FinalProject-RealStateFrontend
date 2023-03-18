import React from 'react'
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "../StyleCss/Carousel.css";

function HouseCard( {house} ) {
   return (
    <div className="listItemHome col-2">
    <Card style={{ width: "18rem" }}>
    <Card.Img style={{ height:"250px", }} variant="top" src={house.picture[0]} />
     <ListGroup className="list-group">
      <ListGroup.Item>
        <b> ${house.price}</b>
       </ListGroup.Item>
       <ListGroup.Item>
        {house.bedRooms}bds | {house.baths}ba |  {house.address.street} | {house.address.city} | {house.address.zipCode} | {house.address.state}
       </ListGroup.Item>
      
       </ListGroup>
    </Card>
    </div>
   
  )
}
  
export default HouseCard



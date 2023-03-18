import React from 'react'
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "../StyleCss/Carousel.css";

function HouseCard( {house} ) {
 return (
    <Card style={{ width: "15rem" }}>
    
      <Card.Img style={{ height:"250px", objectFit:"cover" }} variant="top" src={house.picture[0]} />
      <ListGroup className="list-group-flush">
      <ListGroup.Item className="list-group-item card"><IoBedOutline/>bds: {house.bedRooms}</ListGroup.Item>
        <ListGroup.Item className="list-group-item card"><TbBath/>ba:{house.baths}</ListGroup.Item>
        <ListGroup.Item className="list-group-item card"><BiArea/>{house.houseSize}</ListGroup.Item>
        <ListGroup.Item className="list-group-item card"><MdOutlinePriceCheck/>$ {house.price}</ListGroup.Item>
        
      <ListGroup className="list-group-houseDetails">    
        <ListGroup.Item className="list-group-item card">Address: {house.address.street}</ListGroup.Item>
        <ListGroup.Item className="list-group-item card">Neighborhood: {house.address.neighborhood}</ListGroup.Item>
        <ListGroup.Item className="list-group-item card">City: {house.address.city}</ListGroup.Item>
        <ListGroup.Item className="list-group-item card">State: {house.address.state}</ListGroup.Item>
        <ListGroup.Item className="list-group-item card">Zip code: {house.address.zipCode}</ListGroup.Item>
        <ListGroup.Item className="list-group-item card">Year: {house.builtYear}</ListGroup.Item>
        <ListGroup.Item className="list-group-item card">For: {house.sellRent}</ListGroup.Item> 
      </ListGroup>

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



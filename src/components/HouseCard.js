import React from 'react'
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";


function HouseCard(house) {
  return (
    <Card style={{ width: "15rem" }}>
      <Card.Img style={{ height: "19np8.81px" }} variant="top" src={house.picture} />
      
    
      <ListGroup className="list-group-flush">
        
        <ListGroup.Item className="list-group-item card">{house.address.street}</ListGroup.Item>
        <ListGroup.Item className="list-group-item card">{house.address.neighborhood}</ListGroup.Item>
        <ListGroup.Item className="list-group-item card">{house.address.city}</ListGroup.Item>
        <ListGroup.Item className="list-group-item card">{house.address.state}</ListGroup.Item>
        <ListGroup.Item className="list-group-item card">{house.address.zipCode}</ListGroup.Item>
        <ListGroup.Item className="list-group-item card">BedRooms: {house.bedRooms}</ListGroup.Item>
        <ListGroup.Item className="list-group-item card">Build Yeras: {house.bedRooms}</ListGroup.Item>
        <ListGroup.Item className="list-group-item card">Baths: {house.baths}</ListGroup.Item>
        <ListGroup.Item className="list-group-item card"> ${house.price}</ListGroup.Item>
      </ListGroup>
      <div className="card-body">
      
   
  </div>
    </Card>
  
  )
}

export default HouseCard



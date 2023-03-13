import React from 'react'
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from 'react-router';



function HouseCard( {house} ) {
  
  const navigate = useNavigate();
  
  return (
    <Card style={{ width: "15rem" }}>
      <Card.Img style={{ height: "19np8.81px" }} variant="top" src={house.picture} />

      <ListGroup className="list-group-flush">
        
        <ListGroup.Item className="list-group-item card">Street: {house.address.street}</ListGroup.Item>
        <ListGroup.Item className="list-group-item card">Neighborhood: {house.address.neighborhood}</ListGroup.Item>
        <ListGroup.Item className="list-group-item card">City: {house.address.city}</ListGroup.Item>
        <ListGroup.Item className="list-group-item card">State: {house.address.state}</ListGroup.Item>
        <ListGroup.Item className="list-group-item card">Zip code: {house.address.zipCode}</ListGroup.Item>
        <ListGroup.Item className="list-group-item card">Year: {house.builtYear}</ListGroup.Item>
        
        </div>


      </ListGroup>
      <div className="card-body">
          <a href="#" className="card-link">Details</a> 
      </div>

    </Card>
  
  )
}
  
export default HouseCard



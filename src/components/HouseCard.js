import React from 'react'
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";


function HouseCard(props) {
  return (
    <Card style={{ width: "15rem" }}>
      <Card.Img style={{ height: "19np8.81px" }} variant="top" src={props.picture} />
      <div className="card-title">
            <h5>{props.name}</h5>
        </div>
      <ListGroup className="list-group-flush">
        
        <ListGroup.Item className="list-group-item card">{props.address}</ListGroup.Item>
        <ListGroup.Item className="list-group-item card">
          {props.bedRooms}
        </ListGroup.Item>
        <ListGroup.Item className="list-group-item card">{props.baths}</ListGroup.Item>
      </ListGroup>
      <div className="card-body">
      
   
  </div>
    </Card>
  
  )
}

export default HouseCard



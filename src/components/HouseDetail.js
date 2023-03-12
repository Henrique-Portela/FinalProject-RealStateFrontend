import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function HouseDetail(props) {
  const [house, setHouse] = useState({});
  const { id } = useParams();
 
  const token = localStorage.getItem('token')
  const headers = {
    'Authorization': 'Bearer ' + token
  
  }

  useEffect(() => {
    async function fetchHouse() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/viewhouse/:id${id}`,{headers}
        )
        console.log(response)
        setHouse(response.data)

      } catch (error) {
        console.log(error)
      }
    }
    fetchHouse();
  }, [id]);

   if(!house){
    return <p>loading</p>
   }

  
    

  return(
    <Card style={{ width: "15rem" }}>
    <Card.Img style={{ height: "19np8.81px" }} variant="top" src={house.picture} />
    <div className="card-title">
          <h3>{house.address}</h3>
      </div>
    <ListGroup className="list-group-flush">
      
      <ListGroup.Item className="list-group-item card">{house.houseSize}</ListGroup.Item>
      <ListGroup.Item className="list-group-item card">BedRooms: {house.bedRooms}</ListGroup.Item>
      <ListGroup.Item className="list-group-item card">Baths:{house.baths}</ListGroup.Item>
      <ListGroup.Item className="list-group-item card">HouseSize:{house.houseSize}</ListGroup.Item>
      <ListGroup.Item className="list-group-item card">Price:{house.price}</ListGroup.Item>
    </ListGroup>
    <div className="card-body">
    
 
</div>
  </Card>
 
    

  )
  
};


export default HouseDetail;

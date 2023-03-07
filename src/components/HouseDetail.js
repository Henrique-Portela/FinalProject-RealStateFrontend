import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function HouseDetail() {
  const [house, setHouse] = useState({});
  const { id } = useParams();
 

  useEffect(() => {
    async function fetchHouse() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/viewhouse/${id}`
        );
        console.log(response)
        setHouse({ ...response.data });
      } catch (err) {
        console.log(err);
      }
    }
    fetchHouse();
  }, [id]);

  

  return <div></div>;
}

export default HouseDetail;

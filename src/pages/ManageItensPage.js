import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import HouseManageCard from "../components/HouseManageCard";
import { Link } from "react-router-dom";
import swal from 'sweetalert'

const ManageItensPage = props => {
    const [house, setHouse] = useState([])
    const [refresh, setRefresh] = useState(false)

    //const { id } = useParams()

    const token = localStorage.getItem('token')

    const headers = {
      'Authorization': 'Bearer ' + token
    }
    
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/viewhouse/userhouses`, {headers})
            .then(response => {
                setHouse(response.data)
            })
            .catch(err => console.log(err))
    }, [refresh])

    function deleteHouse(id) {
        axios.delete(`${process.env.REACT_APP_API_URL}/delete/${id}`, {headers})
            .then(response => {
                setRefresh(!refresh)
                swal({
                    title: "Ad Deleted",
                    icon: "success",
                    button: "OK",
                  });
            })
            .catch(err => console.log(err))
    }

    if(!house) {
        return <p> No house found</p>
    }
  
    return (
        <>
        <div className="container">
            <h1> Update or Delete your Ad Here</h1>
            <div className="row">
                
                {house.length > 0 && house.map(house => {
                    return (
                    <div className="col" key={house._id}>
                        <HouseManageCard house={house}/>
                        <div className="butons">
                            <Link type="button" className="btn btn-info btn-sm" to={`/updatehouse/${house._id}`}>Update</Link>
                            <button  className="btn btn-danger btn-sm" onClick={() => deleteHouse(house._id)}>Delete</button>
                        </div>
                    </div>
                    
                    )
                })}
                
            </div>
        </div>
        </>
    )
}

export default ManageItensPage
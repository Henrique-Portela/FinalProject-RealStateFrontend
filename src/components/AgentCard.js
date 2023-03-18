import React from 'react'
import Card from "react-bootstrap/Card";
import { FaPhoneAlt } from 'react-icons/fa';
import { MdPlace } from 'react-icons/md'

const AgentCard = ({agent}) => {
    return (
        <div className="col-2">
            <div className="card" style={{width: "18rem;", backgroundColor:'Gainsboro'}}>
                <img src={agent.picture} style={{height: '120px', borderRadius: '0%'}} className="card-img-top" alt="agentimage"/>
            <div className="card-body">
                <h5 className="card-title" style={{height: '30px'}}>{agent.name}</h5>
            </div>
            <ul className="list-group list-group-flush" >
                <li className="list-group-item" style={{backgroundColor: 'Gray', color: 'white'}}><FaPhoneAlt/> {agent.phoneNumber}</li>
                <li className="list-group-item" style={{backgroundColor: 'Gray', color: 'white'}}><MdPlace/>{agent.city}, {agent.state}</li>
                <li className="list-group-item" style={{backgroundColor: 'Gray', color: 'white'}}><b>License:</b> {agent.realEstateLicense}</li>
            </ul>

            </div>
        </div>
    )
}

export default AgentCard
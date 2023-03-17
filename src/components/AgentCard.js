import React from 'react'
import Card from "react-bootstrap/Card";
import { FaPhoneAlt } from 'react-icons/fa';
import { MdPlace } from 'react-icons/md'

const AgentCard = ({agent}) => {
    return (
        <div className="col-3">
            <div className="card" style={{width: "18rem;"}}>
                <img src={agent.picture} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{agent.name}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><FaPhoneAlt/> {agent.phoneNumber}</li>
                <li className="list-group-item"><MdPlace/>{agent.city}, {agent.state}</li>
                <li className="list-group-item"><b>License:</b> {agent.realEstateLicense}</li>
            </ul>

            </div>
        </div>
    )
}

export default AgentCard
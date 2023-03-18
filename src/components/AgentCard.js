import React from 'react'
import Card from "react-bootstrap/Card";
import { FaPhoneAlt } from 'react-icons/fa';
import { MdPlace } from 'react-icons/md'

const AgentCard = ({agent}) => {
    return (
        <div className="card mb-3" style={{maxwidth: '200px'}}>
        <div className="row g-0">
            <div className="col-md-4">
                <img src={agent.picture} style={{height: '200px', width: '200px'}} className="img-fluid rounded-start" alt="agentphoto"/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{agent.name}</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"> <MdPlace/> {agent.city}, {agent.state}</li>
                        <li class="list-group-item"> <FaPhoneAlt/> {agent.phoneNumber}</li>
                        <li class="list-group-item">{agent.realEstateLicense}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>





    )
}

export default AgentCard
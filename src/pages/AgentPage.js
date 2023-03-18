import axios from "axios"
import { useEffect, useState } from "react"
import AgentCard from '../components/AgentCard'
import HouseCard from "../components/HouseCard"
import Img from '../Img/AgentsPic3.jpeg'


const AgentPage = props => {
    const [agent, setAgents] = useState([])
    const [filteredAgents, setFilteredAgents] = useState([])
    const [search, setSearch] = useState('')

    const agentSearch = (value) => {
        setSearch(value);
        console.log(filteredAgents)
        if(!value){
          setFilteredAgents(agent)
          return
        }
          const result = filteredAgents.filter((agents) => {
            return (agents.name.toLowerCase().includes(search.toLowerCase())  || 
                    agents.city.toLowerCase().includes(search.toLowerCase()) || 
                    agents.state.toLowerCase().includes(search.toLowerCase())) 
          })
          
          setFilteredAgents(result)
      }

    const token = localStorage.getItem('token')

    const headers = {
        'Authorization': 'Bearer ' + token
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/viewagent`, {headers})
            .then(response => {
                setAgents(response.data)
                setFilteredAgents(response.data)
            })
            .catch(err => console.log(err))
    },[])

    return (
        <div className="container">
            <div className="agent-image">
                <img className="agentimg" style={{height: '25rem', width:'100%'}} src={Img} alt="Home" />
                <p></p>
                <div className="agent-text">
                    <h1> Find here your favorite agent.</h1>
         
                <div className="input-group">
                    <div className="form-outline">
                    <div className="form-outline">
                        <input
                        type="text"
                        value={search}
                        onChange={(e) => agentSearch(e.target.value)}
                        placeholder="Enter name, city or state"
                        id="form1"
                        className="form-control-nav"
                        aria-label="Search"
                />
              </div>
            </div>
          </div>
        </div>
      </div>


            <div className="row">
                { filteredAgents.length > 0 && filteredAgents.map(agent => {
                    return (
                        
                        <AgentCard agent={agent} key={agent._id} />
                        
                    )
                }) }
            </div>

        </div>
    )
}

export default AgentPage
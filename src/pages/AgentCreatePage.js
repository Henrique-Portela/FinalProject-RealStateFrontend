import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

const AgentCreatePage = () => {
    
  const [picture, setPicture] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState();
  const [city, setCity] = useState('');
  const [state, setState] = useState();
  const [realEstateLicense, setrealEstateLicense] = useState();
  

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const headers = {
    Authorization: "Bearer " + token,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAgent = {
      picture,
      name,
      phoneNumber,
      city,
      state,
      realEstateLicense
    };
    console.log(newAgent);

    axios.post("http://localhost:3001/agent", newAgent, { headers })
      .then((response) => {
        console.log(response.data);
        swal({
          title: "Real Estate Agent created",
          icon: "success",
          button: "OK",
        });
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  

  const handleUpload = e => {
   
    const uploadData = new FormData();
    uploadData.append("agentPicture", e.target.files[0])
    
    axios.post("http://localhost:3001/agents/uploadImages", uploadData, {headers})
      .then((response) => {
        console.log(response)
        setPicture(response.data.url);
      })
      .catch((err) => console.log(err));
    }
    
    return (
        <div></div>
    )
}

export default AgentCreatePage
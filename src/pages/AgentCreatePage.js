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
        navigate("/viewagent");
      })
      .catch((err) => console.log(err));
  };
  

  const handleUpload = e => {
   
    const uploadData = new FormData();
    uploadData.append('agentPicture', e.target.files[0])
    
    axios.post("http://localhost:3001/agents/uploadImages", uploadData, {headers})
      .then((response) => {
        setPicture(response.data.url);
      })
      .catch((err) => console.log(err));
    }
    
    return (
        <div className="createHouse">
      <div className="row">
        <div className="col">
          <h1>Real Estate Agent Registration</h1>
          <form className="row g-3" onSubmit={handleSubmit}>

            <div className="col-md-4">
              <label for="inputStreet" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="agentname"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
              />
            </div>
            <div className="col-md-3">
              <label for="inputNeighborhood" className="form-label">
                Phone Number
              </label>
              <input
                type="number"
                className="form-control"
                id="agentphonenumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                name="phonenumber"
              />
            </div>
            <div className="col-md-3">
              <label for="inputCity" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                name="city"
              />
            </div>
            <div className="col-md-3">
              <label for="inputState" className="form-label">
                State
              </label>
              <input
                type="text"
                className="form-control"
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                name="state"
              />
            </div>
            <div className="col-md-2">
              <label for="inputzipcode" className="form-label">
                Real Estate License
              </label>
              <input
                type="number"
                className="form-control"
                id="realestatelicense"
                value={realEstateLicense}
                onChange={(e) => setrealEstateLicense(e.target.value)}
                name="realestatelicense"
              />
            </div>
            <div>
              <div>
                <div className="mb-3 col-md-4">
                  <label for="formFileMultiple" className="form-label">
                    Image here
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    id="formFileMultiple"
                    multiple
                    onChange={(e) => handleUpload(e)}
                  />
                </div>
              </div>
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-3">
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    )
}

export default AgentCreatePage
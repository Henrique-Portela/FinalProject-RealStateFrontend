import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import swal from "sweetalert";

const AdCreatePage = (props) => {
  const [address, setAddress] = useState({
    street: "",
    neighborhood: "",
    city: "",
    state: "",
    zipCode: 0,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [bedRooms, setBedrooms] = useState();
  const [baths, setBaths] = useState();
  const [builtYear, setBuiltYear] = useState();
  const [houseSize, setHouseSize] = useState("");
  const [price, setPrice] = useState();
  const [sellRent, setSellRent] = useState("");
  const [picture, setPicture] = useState([]);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const headers = {
    Authorization: "Bearer " + token,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newHouse = {
      address,
      bedRooms,
      baths,
      builtYear,
      houseSize,
      price,
      sellRent,
      picture,
    };
    console.log(newHouse);

    axios
      .post("http://localhost:3001/house", newHouse, { headers })
      .then((response) => {
        console.log(response.data);
        swal({
          title: "Your ad has been created",
          icon: "success",
          button: "OK",
        });
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  

  const handleUpload = (e) => {
   
    const uploadData = new FormData();
  
   
    for (let i = 0; i < e.target.files.length; i++) {
     uploadData.append("housePicture", e.target.files[i]);
    }

    //uploadData.append("housePicture", e.target.files[0]);


    axios
      .post("http://localhost:3001/uploadImages", uploadData, {
        headers,
      })
      .then((response) => {
        console.log(response)
        setPicture(response.data.url);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="createHouse">
      <div className="row">
        <div className="col">
          <h1>Place your ad here </h1>
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-2">
              <label for="inputseelrent" className="form-label">
                Seel / Rent
              </label>
              <select
                onChange={(e) => setSellRent(e.target.value)}
                className="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
              >
                <option selected>Choice Here</option>
                <option value="sell">Sell</option>
                <option value="rent">Rent</option>
              </select>
            </div>
            <div className="col-md-4">
              <label for="inputStreet" className="form-label">
                Street
              </label>
              <input
                type="text"
                className="form-control"
                id="street"
                value={address.street}
                onChange={handleChange}
                name="street"
              />
            </div>
            <div className="col-md-3">
              <label for="inputNeighborhood" className="form-label">
                Neighborhood
              </label>
              <input
                type="text"
                className="form-control"
                id="neighborhood"
                value={address.neighborhood}
                onChange={handleChange}
                name="neighborhood"
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
                value={address.city}
                onChange={handleChange}
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
                value={address.state}
                onChange={handleChange}
                name="state"
              />
            </div>
            <div className="col-md-2">
              <label for="inputzipcode" className="form-label">
                Zip Code
              </label>
              <input
                type="number"
                className="form-control"
                id="zipcode"
                value={address.zipCode}
                onChange={handleChange}
                name="zipCode"
              />
            </div>
            <div className="col-md-1">
              <label for="inputbedrooms" className="form-label">
                Bedrooms
              </label>
              <input
                type="number"
                className="form-control"
                id="bedrooms"
                value={bedRooms}
                onChange={(e) => setBedrooms(e.target.value)}
              />
            </div>
            <div className="col-md-1">
              <label for="inputbaths" className="form-label">
                Baths
              </label>
              <input
                type="number"
                className="form-control"
                id="baths"
                value={baths}
                onChange={(e) => setBaths(e.target.value)}
              />
            </div>
            <div className="col-md-1">
              <label for="inputbuiltYear" className="form-label">
                Built year
              </label>
              <input
                type="number"
                className="form-control"
                id="builtYear"
                value={builtYear}
                onChange={(e) => setBuiltYear(e.target.value)}
              />
            </div>
            <div className="col-md-2">
              <label for="inputhouseSize" className="form-label">
                House size
              </label>
              <input
                type="text"
                className="form-control"
                id="houseSize"
                value={houseSize}
                onChange={(e) => setHouseSize(e.target.value)}
              />
            </div>
            <div>
              <div className="col-md-2">
                <label for="inputprice" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  placeholder="Your price here $"
                  className="form-control"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div>
                <div className="mb-3 col-md-4">
                  <label for="formFileMultiple" className="form-label">
                    Images here
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
  );
};

export default AdCreatePage;

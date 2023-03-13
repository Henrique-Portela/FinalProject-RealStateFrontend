import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router";
import swal from 'sweetalert'



const RentHouse = props => {

  const [street, setStreet] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipcode] = useState('')
  const [bedrooms, setBedrooms] = useState('')
  const [baths, setBaths] = useState('')
  const [builtYear, setBuiltYear] = useState('')
  const [houseSize, setHouseSize] = useState('')
  const [price, setPrice] = useState('')
  const [seelRent, setSeelRent] = useState('')
  const [picture, setPicture] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    const newHouse = {
      street,
      neighborhood,
      city,
      state,
      zipCode,
      bedrooms,
      baths,
      builtYear,
      houseSize,
      price,
      seelRent,
      picture
    }

    const token = localStorage.getItem('token')

    const headers = {
      'Authorization': 'Bearer' + token
    }

    axios.post('http://localhost:3001/house', newHouse, {headers})
      .then(response => {
        console.log(response.data)
        swal({
          title: "Your ad has been created",
          icon: "success",
          button: "OK",
        });
        Navigate("/home");
      })
      .catch(err => console.log(err))

  }

  const handleUpload = e => {
    const uploadData = new FormData()
    uploadData.append('housePicture', e.target.files[0]) 
    axios.post('http://localhost:3001/houses/uploadImages', uploadData)
        .then(response => {
          setPicture(response.data.url)
        })
        .catch(err => console.log(err))
  }
    
  
  return (
    <div className="createHouse">
      <div className="row">
        <div className="col">
          <h1>Place your ad here </h1>
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-4">
              <label for="inputStreet" class="form-label">Street</label>
              <input type="text" 
                     className="form-control" 
                     id="street"
                     value= {street}
                     onChange={(e) => setStreet(e.target.value)}
                     />
            </div>
            <div className="col-md-3">
              <label for="inputNeighborhood" class="form-label">Neighborhood</label>
              <input type="text" 
                     className="form-control" 
                     id="neighborhood"
                     value= {neighborhood}
                     onChange={(e) => setNeighborhood(e.target.value)}
                     />
            </div>
            <div className="col-md-3">
              <label for="inputCity" class="form-label">City</label>
              <input type="text" 
                     className="form-control" 
                     id="city"
                     value= {city}
                     onChange={(e) => setCity(e.target.value)}
                     />
            </div>
            <div className="col-md-3">
              <label for="inputState" class="form-label">State</label>
              <input type="text" 
                     className="form-control" 
                     id="state"
                     value= {state}
                     onChange={(e) => setState(e.target.value)}
                     />
            </div>
            <div className="col-md-2">
              <label for="inputzipcode" class="form-label">Zip Code</label>
              <input type="number" 
                     className="form-control" 
                     id="zipcode"
                     value= {zipCode}
                     onChange={(e) => setZipcode(e.target.value)}
                     />
            </div>
            <div className="col-md-1">
              <label for="inputbedrooms" class="form-label">Bedrooms</label>
              <input type="number" 
                     className="form-control" 
                     id="bedrooms"
                     value= {bedrooms}
                     onChange={(e) => setBedrooms(e.target.value)}
                     />
            </div>
            <div className="col-md-1">
              <label for="inputbaths" class="form-label">Baths</label>
              <input type="number" 
                     className="form-control" 
                     id="baths"
                     value= {baths}
                     onChange={(e) => setBaths(e.target.value)}
                     />
            </div>
            <div className="col-md-1">
              <label for="inputbuiltYear" class="form-label">Built year</label>
              <input type="number" 
                     className="form-control" 
                     id="builtYear"
                     value= {builtYear}
                     onChange={(e) => setBuiltYear(e.target.value)}
                     />
            </div>
            <div className="col-md-2">
              <label for="inputhouseSize" class="form-label">House size</label>
              <input type="text" 
                     className="form-control" 
                     id="houseSize"
                     value= {houseSize}
                     onChange={(e) => setHouseSize(e.target.value)}
                     />
            </div>
          <div>
            <div className="col-md-2">
              <label for="inputprice" class="form-label">Price</label>
              <input type="number"
                     placeholder="Your price here $" 
                     className="form-control" 
                     id="price"
                     value= {price}
                     onChange={(e) => setPrice(e.target.value)}
                     />
            </div>
          </div>
            <div>
              <div>
                <div className="mb-3 col-md-4">
                  <label for="formFileMultiple" className="form-label">Images here</label>
                  <input className="form-control" 
                          type="file" 
                          id="formFileMultiple" multiple
                          onChange={e => handleUpload(e)}
                          />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>





/*     <>
      <div className="mb-3 form-control">
        <div>
        <AdForm
            label="Street"
            type="text"
            name="street"
            onChange={handleChange}
            value={form.street}
          />
            <AdForm
            label="Neighborhood"
            type="text"
            name="neighborhood"
            onChange={handleChange}
            value={form.neighborhood}
          />
          <AdForm
            label="City"
            type="text"
            name="city"
            onChange={handleChange}
            value={form.city}
          />

          <AdForm
            label="State"
            type="text"
            name="state"
            onChange={handleChange}
            value={form.state}
          />
          <AdForm
            label="City"
            type="text"
            name="city"
            onChange={handleChange}
            value={form.city}
          />

          <AdForm
            label="State"
            type="text"
            name="state"
            onChange={handleChange}
            value={form.state}
          />
          <AdForm
            label="Zip"
            type="text"
            name="zip"
            onChange={handleChange}
            value={form.zip}
          />

          <AdForm
            label="BedRooms"
            type="text"
            name="bedrooms"
            onChange={handleChange}
            value={form.bedrooms}
          />
          <AdForm
            label="Baths"
            type="text"
            name="baths"
            onChange={handleChange}
            value={form.baths}
          />

          <AdForm
            label="HouseSize"
            type="text"
            name=" houseSize"
            onChange={handleChange}
            value={form.houseSize}
          />

          <AdForm
            label="BuiltYear"
            type="text"
            name="baths"
            onChange={handleChange}
            value={form.builtYear}
          />

          <CurrencyInput
            placeholder="Enter price"
            value={form.price}
            type="text"
            name="price"
            onChange={handleChange}
          />
        
        </div>
      </div>
    </> */
  );
};

export default RentHouse;

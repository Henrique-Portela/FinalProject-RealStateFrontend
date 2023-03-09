import React from "react";
import AdForm from "../components/AdForm";
import { useState } from "react";
import CurrencyInput from "react-currency-input-field";

const Sell = () => {
  const [form, setForm] = useState({
    photos: [],
    uploading: false,
    address: "",
    city: "",
    State: "",
    zip: "",
    sellRent: "",
    picture: "",
    price: "",
    bedRooms: "",
    baths: "",
    houseSize: "",
    builtYear: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
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
    </>
  );
};

export default Sell;

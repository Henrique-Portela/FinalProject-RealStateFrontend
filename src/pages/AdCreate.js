import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Adcreate = () => {
  const [sell, setSell] = useState(false);
  const [rent, setRent] = useState(false);

  const navigate = useNavigate();

  return (
    <div>
      <h1 className=" text-dark p-4 align-items-center">Sell and Rent your home with confidence.</h1>
      <div
        className="d-flex justify-content-center align-items-center vh-100"
        style={{ marginTop: "-12%" }}
      >
        <div className="col-lg-6">
          <button
            onClick={() => navigate("/ad/create/sell/house")}
            className="col-7 btn-lg p-5"
          >
            Sell
          </button>
        </div>
        <div className="col-lg-6">
          <button
            button
            onClick={() => navigate("/ad/create/rent/house")}
            className="col-7 btn-lg p-5"
          >
            Rent
          </button>
        </div>
      </div>
    </div>
  );
};

export default Adcreate;

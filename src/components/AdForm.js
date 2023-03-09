import React, { useEffect } from "react";
import { useState, useContext } from "react";
import CurrencyInput from "react-currency-input-field";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";



const AdForm = (props) => {

 // const {token} = useContext(AuthContext)
  //const navigate = useNavigate()
  //useEffect(()=>{
   // if(!token){
    //  navigate("/login")
   // }

  //})
  return (
    <div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>{props.label}</label>
          <input
            type={props.type}
            className="form-control"
             name={props.name}
             value={props.value}
            placeholder={props.label}
            onChange={props.onChange}
          />
        </div>
      </div>
    
    </div>
  );
};

export default AdForm;

import React from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';

export default function Form() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data)
    axios({
      method: 'post',
      url: "http://localhost:5000/incidentForm",
      data: {
        "author": data.author,
        "ppe": data.ppe ,
        "conditions": data.conditions,
        "equipment": data.equipment,
        "others": data.others,
        "meds": data.meds,
        "description": data.description
      }
    }).then(res => {
      console.log(res)
    }).catch(err =>{
      console.log("submit error", err)
    })
    
  };

   
  return (
    <div className="form-container">
      <form className="form-wrapper" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-field-wrapper">
          <input className="form-field" name="author" placeholder="Enter Name." ref={register} />
        </div>
        <div className="form-field-wrapper">
          <input className="form-field" name="ppe" placeholder="Please describe PPE Availability, condition, and usage." ref={register} />
        </div>
        <div className="form-field-wrapper">
          <input className="form-field" name="conditions" placeholder="Exacerbating conditions, weather, fatigue etc." ref={register} />
        </div>
        <div className="form-field-wrapper">
          <input className="form-field" name="equipment" placeholder="Please describe any equipment involved" ref={register} />
        </div>
        <div className="form-field-wrapper">
          <input className="form-field" name="others" placeholder="Please list any other people who witnessed the incident" ref={register} />
        </div>
        <div className="form-field-wrapper">
          <input className="form-field" name="meds" placeholder="Please describe any medical treatment needed at the time of the incident." ref={register} />
        </div>
        <div className="form-field-wrapper">
          <textarea className="form-text-field" name="description" placeholder="Please describe the incident. Include any details, no matter how small." ref={register} />
        </div>
        <input className="form-btn" type="submit" />
      </form>
    </div>
  );
}
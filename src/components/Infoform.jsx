import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {useNavigate} from "react-router-dom"
import "./style.css";

const Infoform = () => {
  let [values, setvalues] = useState({});
const local_storage_key=uuidv4()
const navigate=useNavigate()




  const handleform = (e) => {

    const name = e.target.name;
    const value = e.target.value;
    setvalues((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    localStorage.setItem(local_storage_key,JSON.stringify(values))
    Array.from(document.querySelectorAll("input")).map((n)=>n.value="")
    setvalues("")
    navigate("/list")
  }





  return (
    <div className="container">
      <h1>User Information</h1>
      <form onSubmit={handleSubmit} >
        <div className="form-group">
          <input
            type="text"
            placeholder="UserName"
            name="username"
            value={values.username}
            onChange={handleform}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleform}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="info"
            placeholder="UserInfo"
            value={values.info}
            onChange={handleform}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="submit" id="submit-btn" />
        </div>
      </form>
    </div>
  );
};

export default Infoform;

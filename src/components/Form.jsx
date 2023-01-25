import React, { useState } from "react";
import "./form.css";

//firebase authantication
import { database, app } from "../config/config";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const Form = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const auth = getAuth();
  const handleInput = (e) => {
    let inputs = { [e.target.name]: e.target.value };
    setData({ ...data, ...inputs });
  };

  const handleSubmit = (e) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        alert("lso");
      });
  };

  return (
    <div className="form_input">
      <div>
        <input
          type="email"
          name="email"
          placeholder="email..."
          className="input_type"
          onChange={(e) => handleInput(e)}
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="password..."
          className="input_type"
          onChange={(e) => handleInput(e)}
        />
      </div>
      <button onClick={handleSubmit}>sgin up</button>
    </div>
  );
};

export default Form;

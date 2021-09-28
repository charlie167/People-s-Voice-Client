import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import swal from 'sweetalert';


// import "./Login.css";

const Login = () => {
  const url = "/politician_image_building/Gramsevak Dashboard/Login/Login.php";

  const history = useHistory();

  const [inputs, setInput] = useState({
    name: "",
    password: "",
  });

  let name, value;
  const handleInputs = (event) => {
    name = event.target.name;
    value = event.target.value;

    setInput({ ...inputs, [name]: value });
  };

  const handlLogin = (event) => {
    event.preventDefault();
    let formdata = new FormData();

    if (inputs.name !== "") {
      formdata.append("name", inputs.name);
    }
    if (inputs.password !== "") {
      formdata.append("password", inputs.password);
    }

    axios
      .post(url, formdata)
      .then((res) => {
        console.log(res.data);
        if (res.data === 1) {
          sessionStorage.setItem("loggedin", 1);
          history.push("/gramsevak");
        } else if (res.data === 0) {
          swal({
            title: "Incorrect Credentials",
            text: "Please enter valid Credentials!",
            icon: "error",
            button: "OK",
          });
        } else if (res.data === -1) {
          swal({
            title: "Missing Info!",
            text: "Please enter all the details",
            icon: "error",
            button: "OK",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="outermost-container">
      <div className="login">
        <h2>Please Login</h2>
        <input
          type="text"
          name="name"
          onChange={handleInputs}
          value={inputs.name}
          placeholder="Username"
          autoComplete="off"
        />
        <input
          type="password"
          name="password"
          onChange={handleInputs}
          value={inputs.password}
          placeholder="Password"
        />

        <button onClick={handlLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;

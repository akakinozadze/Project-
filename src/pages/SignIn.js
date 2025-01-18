import React, { useState } from "react";
import { PostMethod } from "../api/PostMethod";
const SignIn = () => {
  const [users, setUserst] = useState({
    UserName: "",
    Email: "",
    Password: "",
  });
  const [error, setError] = useState("");
  const [token, setToken] = useState([]);
  console.log(users, "users");
  console.log(error, "error");
  console.log(token, "token");

  const ClicsHendler = (e) => {
    e.preventDefault();
    PostMethod(users)
      .then((data) => {
        setToken(data);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <form className="form" onSubmit={ClicsHendler}>
      <div>
        <label htmlFor="UserName">UserName</label>
        <input
          name="UserName"
          type="text"
          placeholder="UserName"
          onChange={(e) => {
            setUserst((prev) => ({ ...prev, [e.target.name]: e.target.value }));
          }}
        />
      </div>
      <div>
        <label htmlFor="Email">Email</label>
        <input
          name="Email"
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setUserst((prev) => ({ ...prev, [e.target.name]: e.target.value }));
          }}
        />
      </div>
      <div>
        <label htmlFor="Password">Password</label>
        <input
          name="Password"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setUserst((prev) => ({ ...prev, [e.target.name]: e.target.value }));
          }}
        />
      </div>
      <button type="submit">Registre</button>
    </form>
  );
};

export default SignIn;

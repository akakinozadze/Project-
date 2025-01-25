import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import routes from "../constants/routes";
import { authUser } from "../api/auth";

const RegistredForm = () => {
  const [users, setUserst] = useState({
    userName: "",
    password: "",
    email: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const ClicsHendler = (e) => {
    e.preventDefault();
    authUser(users, "register")
      .then(() => {
        navigate(routes.signIn, { state: { succses: true } });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <form className="form" onSubmit={ClicsHendler}>
      <div>
        <label htmlFor="UserName">UserName</label>
        <input
          name="userName"
          type="text"
          placeholder="UserName"
          onChange={(e) => {
            setUserst((prev) => ({ ...prev, [e.target.name]: e.target.value }));
          }}
        />
      </div>
      <div>
        <label htmlFor="Password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setUserst((prev) => ({ ...prev, [e.target.name]: e.target.value }));
          }}
        />
      </div>
      <div>
        <label htmlFor="Email">Email</label>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setUserst((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }));
          }}
        />
      </div>
      <button type="submit">Registre</button>
      {error && <h2 style={{ color: "red" }}>{error}</h2>}
    </form>
  );
};

export default RegistredForm;

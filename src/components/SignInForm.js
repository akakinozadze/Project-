import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authUser } from "../api/auth";
import routes from "../constants/routes";

const SignInForm = () => {
  const [users, setUserst] = useState({
    userName: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const ClicsHendler = (e) => {
    e.preventDefault();
    authUser(users, "login")
      .then((data) => {
        navigate(routes.home);
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
      <button type="submit">Registre</button>
      {error && <h2 style={{ color: "red" }}>{error}</h2>}
    </form>
  );
};

export default SignInForm;

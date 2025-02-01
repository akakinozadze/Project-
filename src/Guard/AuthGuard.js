import React from "react";
import { useApcontext } from "../context/AppContextProvaider";
import { useNavigate } from "react-router-dom";
import routes from "../constants/routes";

const AuthGuard = ({ children }) => {
  const navigate = useNavigate();
  const { state } = useApcontext();

  if (!state.isUserLoggedIn) {
    return (
      <div>
        <div>Please sign in or register</div>
        <button
          onClick={() => {
            navigate(routes.signIn);
          }}
        >
          signIn
        </button>

        <button
          onClick={() => {
            navigate(routes.register);
          }}
        >
          register
        </button>
      </div>
    );
  }
  return <>{children}</>;
};

export default AuthGuard;

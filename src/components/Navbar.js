import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import routes from "../constants/routes";
import { useApcontext } from "../context/AppContextProvaider";
import { signOutUser } from "../context/appActionCreators";
const appRoutes = Object.entries(routes);

const Navbar = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useApcontext();
  console.log(state, "state");

  return (
    <div className="NavBar">
      {state.user?.userName && <h1>Hello {state.user?.userName}</h1>}
      {!state.token
        ? appRoutes.map((rote) => {
            const [key, value] = rote;
            return (
              <button
                key={key}
                onClick={() => {
                  navigate(value);
                }}
              >
                {key}
              </button>
            );
          })
        : appRoutes.slice(0, 3).map((rote) => {
            const [key, value] = rote;
            return (
              <button
                key={key}
                onClick={() => {
                  navigate(value);
                }}
              >
                {key}
              </button>
            );
          })}

      {state.token && (
        <button
          onClick={() => {
            dispatch(signOutUser());
          }}
        >
          Sign Aut
        </button>
      )}
    </div>
  );
};
export default Navbar;

import React from "react";
import { useNavigate } from "react-router-dom";
import routes from "../constants/routes";
const appRoutes = Object.entries(routes);

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="NavBar">
      {appRoutes.map((rote) => {
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
    </div>
  );
};
export default Navbar;

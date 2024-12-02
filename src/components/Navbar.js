import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../constants/routes";
const Navbar = () => {
  return (
    <div className="NavBar">
      <NavLink to={routes.Home}>
        <h2 className="NavbarH2">Home</h2>
      </NavLink>
      <NavLink to={routes.Products}>
        <h2 className="NavbarH2">Products</h2>
      </NavLink>
    </div>
  );
};
export default Navbar;

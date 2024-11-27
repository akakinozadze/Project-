import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../constants/routes";
// import { Home } from "./pages/Home";

const Navbar = () => {
  return (
    <div>
      <NavLink to={routes.Home}>Home</NavLink>
      <NavLink to={routes.Products}>Products</NavLink>
      {/* <NavLink to={routes.ProductDetalePage}></NavLink> */}
    </div>
  );
};

export default Navbar;

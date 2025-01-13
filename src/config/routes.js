import routes from "../constants/routes";
import Home from "../pages/Home";
import Prodact from "../pages/Prodact";
import Detailsprodact from "../pages/Detailsprodact";
import Cart from "../pages/Cart";
import { Component } from "react";
import SignIn from "../pages/SignIn";

export const appRoutes = [
  {
    path: routes.home,
    Component: Home,
  },
  {
    path: routes.products,
    Component: Prodact,
  },
  {
    path: routes.detailsprodact,
    Component: Detailsprodact,
  },
  {
    path: routes.cart,
    Component: Cart,
  },
  {
    path: routes.signIn,
    Component: SignIn,
  },
];

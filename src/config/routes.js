import routes from "../constants/routes";
import Home from "../pages/Home";
import Prodact from "../pages/Prodact";
import Detailsprodact from "../pages/Detailsprodact";
import Cart from "../pages/Cart";

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
];

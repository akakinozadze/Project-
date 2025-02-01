import routes from "../constants/routes";
import Home from "../pages/Home";
import Prodact from "../pages/Prodact";
import Detailsprodact from "../pages/Detailsprodact";
import Cart from "../pages/Cart";
import SignIn from "../pages/SignIn";
import Register from "../pages/Register";
import AuthGuard from "../Guard/AuthGuard";

export const appRoutes = [
  {
    path: routes.home,
    Component: Home,
    Guard: AuthGuard,
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
  {
    path: routes.register,
    Component: Register,
  },
];

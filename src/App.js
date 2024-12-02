import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Prodact";
import routes from "./constants/routes";
import Detailsprodact from "./pages/Detailsprodact";
import Cart from "./pages/Cart";
function App() {
  return (
    <div className="App">
      <h1>heallo middle developer</h1>
      <Navbar />
      <Routes>
        <Route path={routes.Home} Component={Home} />
        <Route path={routes.Products} Component={Products} />
        <Route path={routes.Detailsprodact} Component={Detailsprodact} />
        <Route path={routes.Cart} Component={Cart} />
      </Routes>
    </div>
  );
}

export default App;

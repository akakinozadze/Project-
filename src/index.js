import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Routes } from "react-router-dom";
import AppContextProvaider from "./context/AppContextProvaider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Routes>
    <AppContextProvaider>
      <App />
    </AppContextProvaider>
  </Routes>
);






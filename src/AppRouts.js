import React from "react";
import { appRoutes } from "./config/routes";
import { Route, Routes } from "react-router-dom";
import Detailsprodact from "./pages/Detailsprodact";

const AppRouts = () => {
  return (
    <Routes>
      {appRoutes.map((route, index) => {
        return (
          <Route key={index} path={route.path} element={<route.Component />} />
        );
      })}
      <Route path="/products/:Detailsprodact" element={<Detailsprodact />} />
    </Routes>
  );
};

export default AppRouts;

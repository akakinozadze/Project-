import React, { useState } from "react";
import { appRoutes } from "./config/routes";
import { Route, Routes } from "react-router-dom";

const AppRouts = () => {
  return (
    <Routes>
      {appRoutes.map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            Component={route.Component}
          />
        );
      })}
      {/* <Route
        path="/products/:detailsprodact"
        element={<Detailsprodact setDetals={setDetals} />}
      /> */}
    </Routes>
  );
};

export default AppRouts;

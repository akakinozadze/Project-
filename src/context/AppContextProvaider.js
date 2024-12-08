import React, { createContext, useContext, useState } from "react";

const appContext = createContext();

const AppContextProvaider = ({ children }) => {
  const [first, setFirst] = useState([]);
  Object.entries(first).forEach((data) => {
    const [key, value] = data;
    if (data) {
      localStorage.setItem(key, value);
    }
  });
  // let resalt = localStorage.getItem("thumbnail");
  // console.log(typeof resalt, "localstorage");

  return (
    <appContext.Provider value={[first, setFirst]}>
      {children}
    </appContext.Provider>
  );
};

export const useApcontext = () => {
  const store = useContext(appContext);
  if (appContext) {
    return store;
  }

  throw new Error("error");
};

export default AppContextProvaider;

//thumbnail , brand , price

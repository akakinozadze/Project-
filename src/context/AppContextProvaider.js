import React, { createContext, useContext, useEffect, useReducer } from "react";
import { appReducer, initialeState } from "./appReduser";
import Fetch1 from "../api/fetch";
import {
  CreateIsProdactLoading,
  CreateSaveErrorData,
  CreateSaveProdactData,
} from "./appActionCreators";

const appContext = createContext();

const AppContextProvaider = ({ children }) => {
  useEffect(() => {
    CreateIsProdactLoading(false);
    Fetch1()
      .then((data) => {
        dispatch(CreateSaveProdactData(data.products));
      })
      .catch((err) => {
        dispatch(CreateSaveErrorData(err.message));
      });
  }, []);
  const [state, dispatch] = useReducer(appReducer, initialeState);
  return (
    <appContext.Provider value={{ state, dispatch }}>
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

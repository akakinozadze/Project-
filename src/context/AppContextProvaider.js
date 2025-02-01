import React, { createContext, useContext, useEffect, useReducer } from "react";
import { appReducer, initialeState } from "./appReduser";
import Fetch1 from "../api/fetch";
import {
  CreateIsProdactLoading,
  CreateSaveErrorData,
  CreateSaveProdactData,
  signInUser,
} from "./appActionCreators";
import { isTokenVAlid } from "../utils";

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
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token && isTokenVAlid(token)) {
      dispatch(signInUser(token));
    }
  }, []);

  return (
    <appContext.Provider value={{ state, dispatch }}>
      {children}
    </appContext.Provider>
  );
};

export const useApcontext = () => {
  const contexr = useContext(appContext);
  if (contexr) {
    return contexr;
  }

  throw new Error("error");
};
export default AppContextProvaider;

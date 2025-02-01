import { parseToken, toggleLocalStorage } from "../utils";
import { appAction } from "./actions";

export const initialeState = {
  Prodacts: [],
  ErrorProdactData: "",
  IsProdactLoading: true,
  isUserLoggedIn: false,
  user: null,
  token: "",
};

export function appReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case appAction.incriment: {
      return { ...state, counter: state.counter + payload };
    }
    case appAction.decriment: {
      return { ...state, counter: state.counter - payload };
    }
    case appAction.ProdactDataSaved: {
      return { ...state, Prodacts: payload, IsProdactLoading: false };
    }
    case appAction.ReportProdactError: {
      return { ...state, ErrorProdactData: payload, IsProdactLoading: false };
    }
    case appAction.IsProdactloading: {
      return { ...state, IsProdactLoading: payload };
    }
    case appAction.signInUser: {
      const user = parseToken(payload);
      toggleLocalStorage(payload);
      return { ...state, isUserLoggedIn: true, token: payload, user };
    }
    case appAction.signOutUser: {
      toggleLocalStorage();
      return { ...state, isUserLoggedIn: false, token: "", user: null };
    }
    default:
      return state;
  }
}

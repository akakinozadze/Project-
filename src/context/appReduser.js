import { appAction } from "./actions";

export const initialeState = {
  Prodacts: [],
  ErrorProdactData: "",
  IsProdactLoading: true,
};

export function appReducer(state, action) {
  const { type, payload } = action;
  console.log(type, "type");
  console.log(payload, "payload");

  switch (type) {
    case appAction.ProdactDataSaved: {
      return { ...state, Prodacts: payload, IsProdactLoading: false };
    }
    case appAction.ReportProdactError: {
      return { ...state, ErrorProdactData: payload, IsProdactLoading: false };
    }
    case appAction.IsProdactloading: {
      return { ...state, IsProdactLoading: payload };
    }
    default:
      return state;
  }
}

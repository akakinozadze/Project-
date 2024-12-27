import { appAction } from "./actions";

export const initialeState = {
  counter: 0,
  Prodacts: [],
  ErrorProdactData: "",
  IsProdactLoading: true,
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

    default:
      return state;
  }
}

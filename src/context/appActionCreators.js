import { appAction } from "./actions";

export function CreateSaveProdactData(payload) {
  return {
    type: appAction.ProdactDataSaved,
    payload,
  };
}
export function CreateSaveErrorData(payload) {
  return {
    type: appAction.ReportProdactError,
    payload,
  };
}
export function CreateIsProdactLoading(payload) {
  return {
    type: appAction.IsProdactloading,
    payload,
  };
}

export function signInUser(payload) {
  return { type: appAction.signInUser, payload };
}
export function signOutUser() {
  return { type: appAction.signOutUser };
}

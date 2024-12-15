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
  // const [first, setFirst] = useState(() => {
  //   const sacavi = localStorage.getItem("key");
  //   console.log(sacavi, "storage");
  //   // return sacavi ? JSON.parse(sacavi) : [];
  // });
  // console.log(first);

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
  // const [first, setfirst] = useState(second);
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
// Object.entries(first).forEach((data) => {
//   const [key, value] = data;
//   if (data) {
//   }
// });
// Object.entries(first).forEach((data) => {
//   // const [key, value] = data;
//   if (data) {
//   }
// });
// let resalt = localStorage.getItem("thumbnail");
// console.log(typeof resalt, "localstorage");
// const useFetch = (url) => {
//   const [data, setData] = useState([]);
//   const [error, seterror] = useState("");
//   const [isLouding, setIsLouding] = useState(true);
//   fetch(url)
//     .then((resp) => {
//       if (resp.ok) {
//         return resp.json();
//       }
//       throw new Error("fetch error");
//     })
//     .then((data) => {
//       setData(data.products);
//     })
//     .catch((err) => {
//       seterror(err.message);
//     })
//     .finally(() => {
//       setIsLouding(false);
//     });
//   return [data, error, isLouding];
// };

//thumbnail , brand , price

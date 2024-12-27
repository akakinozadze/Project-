import React, { useState } from "react";
import { useApcontext } from "../context/AppContextProvaider";
import { decrimentFnc, incrimentFnc } from "../context/appActionCreators";
const Cart = () => {
  const [getItemLocalStorage, setGetItemLocalStorage] = useState(() => {
    let getin = localStorage.getItem("Key");
    getin = getin ? JSON.parse(getin) : [];
    return getin;
  });

  const DeletHendler = (index) => {
    let NewStorage = [];
    NewStorage = getItemLocalStorage;
    NewStorage.splice(index, 1);
    setGetItemLocalStorage([...NewStorage]);
    localStorage.setItem("Key", JSON.stringify(getItemLocalStorage));
  };
  const {
    state: { counter },
    dispatch,
  } = useApcontext();
  console.log({ state: counter }, "counter");

  return (
    <div className="minBoxStorage">
      {Boolean(getItemLocalStorage)
        ? getItemLocalStorage.map((e, index) => (
            <div key={index} className="storageBox">
              {console.log(index, "index")}
              <img src={e.prPhoto}></img>
              <p>{e.prName}</p>
              <button
                onClick={() => {
                  dispatch(decrimentFnc(1));
                }}
              >
                -
              </button>
              {counter}
              <button
                onClick={() => {
                  dispatch(incrimentFnc(1));
                }}
              >
                +
              </button>

              <p className="localPrace">{e.price}</p>
              <button
                onClick={() => {
                  DeletHendler(index);
                }}
              >
                delet
              </button>
            </div>
          ))
        : "hello"}
    </div>
  );
};

export default Cart;

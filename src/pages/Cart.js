import React, { useEffect, useState } from "react";
import { useApcontext } from "../context/AppContextProvaider";

const Cart = () => {
  let takeLocal = JSON.parse(localStorage.getItem("Key"));
  console.log(takeLocal);

  return (
    <div className="minBoxStorage">
      {Boolean(takeLocal)
        ? takeLocal.map((e) => (
            <div className="storageBox">
              <img src={e.prPhoto}></img>
              <p>{e.prName}</p>
              <p className="localPrace">{e.price}</p>
            </div>
          ))
        : "hello"}
    </div>
  );
};

export default Cart;

let x = "1";

x = "" ? true : "chveni mepi";
console.log(x);

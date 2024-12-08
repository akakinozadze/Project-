import React, { useEffect, useState } from "react";
import { useApcontext } from "../context/AppContextProvaider";

const Cart = () => {
  let obj = {
    thumbnail: "",
    title: "",
  };
  obj.thumbnail = localStorage.getItem("thumbnail");
  obj.title = localStorage.getItem("title");
  console.log(obj, "local");
  return (
    <div>
      {[obj].map((e) => (
        <>
          <h1>{e.title}</h1>
          <img src={e.thumbnail}></img>
        </>
      ))}
      {/* <h2>count : {sum.first}</h2>
      <button
        onClick={() => {
          sum.setFirst(sum.first + 1);
        }}
      >
        incriment
      </button> */}
    </div>
  );
};

export default Cart;

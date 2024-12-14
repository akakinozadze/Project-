import React, { useEffect, useState } from "react";
import { useApcontext } from "../context/AppContextProvaider";

const Cart = () => {
  // const [first] = useApcontext();
  // let sum = [];
  // console.log(sum, "meoresacavi");
  // useEffect(() => {
  //   JSON.parse(localStorage.getItem("key"));
  // }, [first]);

  return (
    <div>
      {/* {sum.map((e) => (
        <>
          <h1>{e.title}</h1>
          <img src={e.thumbnail}></img>
        </>
      ))} */}
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

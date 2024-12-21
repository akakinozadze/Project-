import React, { useState } from "react";
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

  return (
    <div className="minBoxStorage">
      {Boolean(getItemLocalStorage)
        ? getItemLocalStorage.map((e, index) => (
            <div key={index} className="storageBox">
              <img src={e.prPhoto}></img>
              <p>{e.prName}</p>
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


import React, { useState } from "react";
const Cart = () => {
  const [getItemLocalStorage, setGetItemLocalStorage] = useState(() => {
    let retrieving = localStorage.getItem("Key");
    retrieving = retrieving ? JSON.parse(retrieving) : [];
    return retrieving;
  });
  const [counter, setCounter] = useState(0);
  console.log(counter);

  const DeletHendler = (index) => {
    let NewStorage = [];
    NewStorage = getItemLocalStorage;
    NewStorage.splice(index, 1);
    setGetItemLocalStorage([...NewStorage]);
    localStorage.setItem("Key", JSON.stringify(getItemLocalStorage));
  };
  const IncrimentHendler = (index) => {
    let updatedStorage = localStorage.getItem("Key");
    updatedStorage = updatedStorage ? JSON.parse(updatedStorage) : [];
    if (index >= 0) {
      updatedStorage[index].total = updatedStorage[index].total + 1;
    }
    setGetItemLocalStorage(updatedStorage);

    localStorage.setItem("Key", JSON.stringify(updatedStorage));
  };

  const DecrimnetHendler = (index) => {
    let updatedStorage = localStorage.getItem("Key");
    updatedStorage = updatedStorage ? JSON.parse(updatedStorage) : [];
    if (index >= 0) {
      updatedStorage[index].total = updatedStorage[index].total - 1;
    }
    setGetItemLocalStorage(updatedStorage);
    localStorage.setItem("Key", JSON.stringify(updatedStorage));
  };

  return (
    <div className="minBoxStorage">
      {Boolean(getItemLocalStorage)
        ? getItemLocalStorage.map((e, index) => (
            <div key={index} className="storageBox">
              <img src={e.prPhoto}></img>
              <p>{e.prName}</p>
              <button
                onClick={() => {
                  DecrimnetHendler(index);
                  setCounter(counter - 1);
                }}
              >
                -
              </button>
              {e.total}
              <button
                onClick={() => {
                  IncrimentHendler(index);
                  setCounter(counter + 1);
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

import React, { useState } from "react";
const Cart = () => {
  const [getItemLocalStorage, setGetItemLocalStorage] = useState(() => {
    let retrieving = localStorage.getItem("Key");
    retrieving = retrieving ? JSON.parse(retrieving) : [];
    retrieving.forEach((item) => {
      if (!item.initialPrice) {
        item.initialPrice = item.price;
      }
    });
    return retrieving;
  });

  const DeletHendler = (index) => {
    let NewStorage = [];
    NewStorage = getItemLocalStorage;
    NewStorage.splice(index, 1);
    setGetItemLocalStorage([...NewStorage]);
    localStorage.setItem("Key", JSON.stringify(getItemLocalStorage));
  };
  const IncrimentHendler = (index) => {
    let updatedStorage = [...getItemLocalStorage];

    if (index >= 0 && updatedStorage[index].total < 10) {
      updatedStorage[index].total = updatedStorage[index].total + 1;
      updatedStorage[index].price =
        updatedStorage[index].price + updatedStorage[index].initialPrice;
    }
    setGetItemLocalStorage(updatedStorage);
    localStorage.setItem("Key", JSON.stringify(updatedStorage));
  };

  const DecrimnetHendler = (index) => {
    let updatedStorage = [...getItemLocalStorage];
    if (index >= 0 && updatedStorage[index].total > 0) {
      updatedStorage[index].total = updatedStorage[index].total - 1;
      updatedStorage[index].price =
        updatedStorage[index].price - updatedStorage[index].initialPrice;
    }
    setGetItemLocalStorage(updatedStorage);
    localStorage.setItem("Key", JSON.stringify(updatedStorage));
  };

  return (
    <div className="minBoxStorage">
      {Boolean(getItemLocalStorage)
        ? getItemLocalStorage.map((element, index) => (
            <div key={index} className="storageBox">
              <img src={element.prPhoto}></img>
              <p>{element.prName}</p>
              <button
                onClick={() => {
                  DecrimnetHendler(index);
                }}
              >
                -
              </button>
              {element.total}
              <button
                onClick={() => {
                  IncrimentHendler(index);
                }}
              >
                +
              </button>

              <p className="localPrace">{element.price}</p>
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

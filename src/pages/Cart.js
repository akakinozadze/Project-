import React, { useState } from "react";
const Cart = () => {
  const [getItemLocalStorage, setGetItemLocalStorage] = useState(() => {
    let retrieving = localStorage.getItem("Key");
    retrieving = retrieving ? JSON.parse(retrieving) : [];
    console.log(retrieving, "ret");

    retrieving.forEach((item) => {
      if (!item.initialPrice) {
        item.initialPrice = item.price;
      }
    });

    return retrieving;
  });

  let sum = getItemLocalStorage
    .reduce((Starting, EachElement) => {
      return Starting + (parseFloat(EachElement.price) || 0);
    }, 0)
    .toFixed(2);

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
      updatedStorage[index].price = (
        parseFloat(updatedStorage[index].price) +
        parseFloat(updatedStorage[index].initialPrice)
      ).toFixed(2);
    }
    setGetItemLocalStorage(updatedStorage);
    localStorage.setItem("Key", JSON.stringify(updatedStorage));
  };

  const DecrimnetHendler = (index) => {
    let updatedStorage = [...getItemLocalStorage];
    if (index >= 0 && updatedStorage[index].total > 1) {
      updatedStorage[index].total = updatedStorage[index].total - 1;
      updatedStorage[index].price = (
        parseFloat(updatedStorage[index].price) -
        parseFloat(updatedStorage[index].initialPrice)
      ).toFixed(2);
    }
    setGetItemLocalStorage(updatedStorage);
    localStorage.setItem("Key", JSON.stringify(updatedStorage));
  };

  return (
    <div className="minBoxStorage">
      {Boolean(getItemLocalStorage) ? (
        <div className="TestOnli">
          <div className="test2">
            {getItemLocalStorage.map((element, index) => (
              <div className="StoreMainBox">
                <div key={index} className="storageBox1">
                  <div className="storageBox">
                    <img src={element.prPhoto}></img>
                    <p className="ElementName">{element.prName}</p>
                    <button
                      onClick={() => {
                        DecrimnetHendler(index);
                      }}
                    >
                      -
                    </button>
                    <div className="TotalItem">{element.total}</div>
                    <button
                      onClick={() => {
                        IncrimentHendler(index);
                      }}
                    >
                      +
                    </button>

                    <p className="localPrace">{element.price}</p>
                  </div>
                  <button
                    onClick={() => {
                      DeletHendler(index);
                    }}
                  >
                    delet
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="test3">
            <h1>{"Total :" + sum + "$"}</h1>
          </div>
        </div>
      ) : (
        "hello"
      )}
    </div>
  );
};

export default Cart;

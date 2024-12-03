import React, { useEffect, useState } from "react";
import Fetch1 from "../api/fetch";
import Users from "./Users";

const DataProduct = () => {
  // აქ უკვე ინახება 5 ცალი პროდუქტის სერვერიდან წამოღებული ინფო
  const [product, setProduct] = useState([]);
  const [errorMesage, setErrorMesage] = useState("");
  const [showMore, setShowMore] = useState(10);
  useEffect(() => {
    Fetch1()
      .then((data) => {
        setProduct(data.products);
      })
      .catch((error) => {
        setErrorMesage(error.message);
      })
      .finally(() => {});
  }, []);

  const SowMorOnClick = (e) => {
    // ხუთზე მეტი პროდუქტის დასახატი
    e.preventDefault();
    Fetch1(showMore)
      .then((data) => {
        setProduct(data.products);
      })
      .catch((error) => {
        setErrorMesage(error.message);
      });
    setShowMore(showMore + 5);
  };

  if (errorMesage) {
    // თუ ერორი მოხდა  მესიჯის გამოტანა
    return (
      <div>
        <h1>{errorMesage}</h1>
      </div>
    );
  }
  return (
    <div className="Main">
      <div className="seconBox">
        {product.map((prodactElemet) => (
          <Users key={prodactElemet.id} data={prodactElemet} />
        ))}
      </div>
      <button className="buttonShowMore" onClick={SowMorOnClick}>
        Show more
      </button>
    </div>
  );
};

export default DataProduct;

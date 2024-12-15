import React, { useState, useEffect } from "react";
import { LocalStorage3, localStorage3 } from "../Localstorage/Localstorage";

const CardDetales = ({ element }) => {
  const [price, setPrice] = useState(element.price);
  const [select, setSelect] = useState([]);
  const [sum, setSum] = useState(element.price);

  useEffect(() => {
    if (select == 1) {
      setSum(price);
    } else if (select == 2) {
      setSum(price * 2);
    } else if (select == 3) {
      setSum(price * 3);
    }
  }, [select]);
  const [urika, setUrika] = useState();

  const ClickHendler = () => {
    setUrika(element);
  };
  LocalStorage3(urika);

  return (
    <div className="CardDetalesBox">
      <div>
        <img className="DetalsPageImg" src={element.thumbnail}></img>
      </div>
      <div>
        <h1 className="DetalsPagePharagap">{element.brand}</h1>
        <h2 className="DetalsPagePharagap">{element.title}</h2>
        <p>{element.dimensions.depth}</p>
      </div>
      <div className="priceDetalPh">
        <div className="priceDetalPh2">
          <p className="pharagrap">{element.category}</p>
          <div className="PriceBox">
            <p className="pharagrapprice1">{sum}</p>
            <select
              onChange={(e) => {
                setSelect(e.target.value);
              }}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <p className="pharagrap">{element.availabilityStatus}</p>
          <button className="addToCartButton2" onClick={ClickHendler}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetales;

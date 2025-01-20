import React, { useState } from "react";
import { LocalStorage3 } from "../Localstorage/Localstorage";
import { useNavigate } from "react-router-dom";
import routes from "../constants/routes";

const CardDetales = ({ element }) => {
  const navigate = useNavigate();

  const [select, setSelect] = useState(1);
  let sum = [element.price].reduce((startSelector, price) => {
    return startSelector * price;
  }, select);

  const ClickHendler = () => {
    LocalStorage3(element, select, sum);
    navigate(`${routes.cart}`);
  };
  return (
    <div className="CardDetalesBox">
      <div>
        <img className="DetalsPageImg" src={element.thumbnail}></img>
      </div>
      <div>
        <h1 className="DetalsPagePharagap">brand -- {element.brand}</h1>
        <h2 className="DetalsPagePharagap">title -- {element.title}</h2>
        <p> dimensions</p>
        <p>depth -- {element.dimensions.depth} </p>
        <p>height -- {element.dimensions.height} </p>
        <p>width -- {element.dimensions.width} </p>
        <p>returnPolicy -- {element.returnPolicy} </p>
        <p>shippingInformation -- {element.shippingInformation} </p>
        <p>weight -- {element.weight} </p>
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
              <option>4</option>
              <option>5</option>
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

import React from "react";

const CardDetales = ({ element }) => {
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
          <p className="pharagrapprice1">{element.price}</p>
          <p className="pharagrap">{element.availabilityStatus}</p>
          <button className="addToCartButton2">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default CardDetales;

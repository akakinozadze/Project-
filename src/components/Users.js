import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import routes from "../constants/routes";
import { LocalStorage3 } from "../Localstorage/Localstorage";

const Users = ({ data }) => {
  const navigate = useNavigate();
  const [urika, setUrika] = useState();
  const EddTocarfHendler = () => {
    setUrika(data);
  };
  LocalStorage3(urika);
  return (
    <div>
      <div
        className="FirstBox"
        onClick={() => {
          navigate(`${routes.products}/${data.id}`);
        }}
      >
        <div className="mapMainBox">
          <div className="ImageBox">
            <img className="img" src={data.images[0]}></img>
          </div>
          <p className="pharagrap">{data.brand}</p>
          <p className="pharagrap">{data.category}</p>
          <p className="pharagrapprice">{data.price}</p>
        </div>
      </div>
      <button
        className="addToCartButton"
        onClick={() => {
          EddTocarfHendler();
          navigate(`${routes.cart}`);
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Users;

import React from "react";
import { useNavigate } from "react-router-dom";
import routes from "../constants/routes";

const Users = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="FirstBox"
        onClick={() => {
          navigate(`${routes.Products}/${data.id}`);
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
          navigate(`${routes.Cart}`);
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Users;

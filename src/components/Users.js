import React from "react";
import { useNavigate } from "react-router-dom";
import routes from "../constants/routes";

const Users = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="FirstBox">
      <div className="mapMainBox">
        <p className="pharagrap">{data.availabilityStatus}</p>
        <p className="pharagrap">{data.brand}</p>
        <p className="pharagrap">{data.category}</p>
        <img className="img" src={data.images[0]}></img>
        <button
          onClick={() => {
            navigate(`${routes.Products}/${data.id}`);
          }}
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default Users;

import React, { useState } from "react";
import Fetch1 from "../api/fetch";
import Users from "./Users";
import { useApcontext } from "../context/AppContextProvaider";
import {
  CreateSaveErrorData,
  CreateSaveProdactData,
} from "../context/appActionCreators";
import { RiseLoader } from "react-spinners";

const DataProduct = () => {
  const { state, dispatch } = useApcontext();
  const [showMore, setShowMore] = useState(10);

  const SowMorOnClick = (e) => {
    // ხუთზე მეტი პროდუქტის დასახატი
    e.preventDefault();
    Fetch1(showMore)
      .then((data) => {
        dispatch(CreateSaveProdactData(data.products));
      })
      .catch((error) => {
        dispatch(CreateSaveErrorData(error.message));
      });
    setShowMore(showMore + 5);
  };

  if (state.ErrorProdactData) {
    // თუ ერორი მოხდა  მესიჯის გამოტანა
    return (
      <div>
        <h1>{state.ErrorProdactData}</h1>
      </div>
    );
  }

  return (
    <div className="Main">
      <div className="seconBox">
        {state.IsProdactLoading && <RiseLoader color="#2be714" size={"10px"} />}
        {state.Prodacts.map((prodactElemet) => (
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



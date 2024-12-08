import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardDetales from "../components/CardDetales";
import { useApcontext } from "../context/AppContextProvaider";
const Detailsprodact = () => {
  const navigate = useNavigate();
  const params = useParams();
  // console.log(typeof params.dataId, "dataid");

  const [data, setData] = useState([]);
  // console.log(data, "ra shemoaqvs");

  const [errorMesage, setErrorMesage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  // let [first, setFirst] = useApcontext();
  // console.log(first, "first");

  useEffect(() => {
    fetch(`https://dummyjson.com/product/${params.dataId}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setData([data]);
        // setFirst([data]);
      })
      .catch((error) => {
        setErrorMesage(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [params.dataId]);
  if (errorMesage) {
    return <h1 style={{ fontSize: "26px", color: "red" }}>{errorMesage}</h1>;
  }
  return (
    <div className="DetalsBoxMain">
      <button
        className="BackToResultsButton"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back to results
      </button>
      {data.map((element) => (
        <CardDetales key={element.id} element={element} />
      ))}
    </div>
  );
};

export default Detailsprodact;

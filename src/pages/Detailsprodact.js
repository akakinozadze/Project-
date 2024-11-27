import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const Detailsprodact = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState([]);
  const [errorMesage, setErrorMesage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`https://dummyjson.com/product/${params.dataId}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setData([data]);
      })
      .catch((error) => {
        setErrorMesage(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [params.dataId]);

  return (
    <div>
      {data.map((e) => (
        <div className="DetalsBox">
          <h1>{e.brand}</h1>
          <h2>{e.title}</h2>
          <img src={e.thumbnail}></img>
        </div>
      ))}
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go back
      </button>
      {/* <span>{JSON.stringify(data, null, 2)}</span> */}
    </div>
  );
};

export default Detailsprodact;

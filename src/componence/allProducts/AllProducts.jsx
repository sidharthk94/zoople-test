import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AllProducts.css";
import Spinner from "../spinner/Spinner";
import { useNavigate } from "react-router-dom";

const AllProducts = () => {
  const [items, setItems] = useState();
  const [loading, setloading] = useState(false);
  const [count, setCount] = useState(6);

  const navigate = useNavigate();

  useEffect(() => {
    setloading(true);
    async function datas() {
      const response = await axios.get("https://dummyjson.com/products");
      console.log(response?.data?.products);
      setItems(response?.data?.products);
      setloading(false);
    }
    datas();
  }, []);

  function handleNext() {
    setCount((pre) => pre + 6);
  }

  function handlePre() {
    setCount((pre) => pre - 6);
  }

  function handleNavigation(id) {
    navigate(`/details/${id}`);
  }
  return (
    <>
      {loading ? (
        <div className="spin">
          <Spinner />
        </div>
      ) : (
        <div style={{margin:"10px"}}>
          <div className="grid-container">
            {items?.slice(0, count).map((data) => (
              <div
                className="grid-item"
                key={data.id}
                onClick={() => handleNavigation(data.id)}
              >
                <img src={data.images[0]} alt={data.name} className="imagess" />
                <p>{data.price}</p>
                <h5>{data.title}</h5>
              </div>
            ))}
          </div>
          <div className="pagination_container">
            <button
              className="pag_button"
              onClick={handlePre}
              disabled={count <= 6}
            >
              Pre
            </button>
            <button
              className="pag_button"
              onClick={handleNext}
              disabled={count >= items?.length}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AllProducts;

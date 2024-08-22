import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import { MdCurrencyRupee } from "react-icons/md";
import { AiOutlinePercentage } from "react-icons/ai";
import { FaTag } from "react-icons/fa6";
import "./Details.css";

const Details = () => {
  const [data, setData] = useState();
  const obj = useParams();
  useEffect(() => {
    async function detailsData() {
      const response = await axios.get(
        `https://dummyjson.com/products/${obj.id}`
      );
      console.log(response, "ooooooooooooo");
      setData(response?.data);
    }
    detailsData();
  }, []);

  return (
    <div className="details_main_container">
      <div className="image_container">
        <img src={data?.images[0]} alt="product image" className="item_image" />
      </div>

      <div className="product_details">
        <h2 className="product_title">{data?.title}</h2>
        <h4 className="product_discription">{data?.description}</h4>

        <div className="rating_reviews">
          <div className="rating_container">
            <span>{data?.rating}</span>
            <CiStar className="rating_star" />
          </div>
          <p className="reviews">{data?.reviews?.length} Reviews</p>
        </div>

        <div className="percentage_container">
          <div className="price_container">
            <MdCurrencyRupee className="rup_symbol" />
            <span className="ammount">{data?.price}</span>{" "}
          </div>

          <div className="per_container">
            <span>{data?.discountPercentage}</span>
            <AiOutlinePercentage />
          </div>
        </div>


        <div style={{marginTop:"30px"}}>
          <div className="offers">
            <FaTag />
            <p className="offer_text">
              <b>Bank OfferGet</b> ₹50 Instant Discount on first Ekart UPI
              transaction on order of ₹200 and above
            </p>
          </div>

          <div className="offers">
            <FaTag />
            <p className="offer_text">
              <b>Special Price</b> Get extra 26% off (price inclusive of cashback/coupon)
            </p>
          </div>

          <div className="offers">
            <FaTag />
            <p className="offer_text">
              <b>Bank OfferGet</b> 5% Cashback on Ekart Axis Bank Card
            </p>
          </div>

          <div className="offers">
            <FaTag />
            <p className="offer_text">
              <b>Bank OfferGet</b> Flat ₹1000 off on HDFC Bank Credit Card EMI Txns, Tenure: 6 and 9 months, Min Txn Value: ₹15,000
            </p>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Details;

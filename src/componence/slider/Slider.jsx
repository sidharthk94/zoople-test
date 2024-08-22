import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "./Slider.css";

const Slider = () => {
  const [imageToshow, setImageToShow] = useState(0);

  const sliderImages = [
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b6f240b47c2e8974.png?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/8ee5926eb5168da9.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/97f695ce49d7a367.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/83191196ffdff00b.png?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/6405703b74d1f529.jpg?q=20",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      forwardImage();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [imageToshow]);

  function backwardImage() {
    if (imageToshow <= 0) {
      setImageToShow(sliderImages.length - 1);
    } else {
      setImageToShow((pre) => pre - 1);
    }
  }

  function forwardImage() {
    if (imageToshow >= sliderImages.length - 1) {
      setImageToShow(0);
    } else {
      setImageToShow((pre) => pre + 1);
    }
  }
  return (
    <div className="slider">
      {sliderImages.map((image, index) => (
        <img
          src={image}
          alt="slide image"
          className={imageToshow === index ? "slide_image" : "hide_slide_image"}
        />
      ))}

      <div className="slider_back" onClick={backwardImage}>
        <IoIosArrowBack />
      </div>
      <div className="slider_forward" onClick={forwardImage}>
        <IoIosArrowForward />
      </div>
      <div className="image_position">
        {sliderImages.map((image, index) => (
          <div
            className={
              imageToshow === index ? "image_indicator" : "hide_image_indicator"
            }
          ></div>
        ))}

        <div className=""></div>
      </div>
    </div>
  );
};

export default Slider;

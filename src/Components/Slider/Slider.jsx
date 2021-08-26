import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import { getUserData } from "utils/get-data";

const TestimonalsSlider = () => {
  const [userDatas, setUserDatas] = useState([]);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    focusOnSelect: true,
  };

  useEffect(() => {
    getUserData(setUserDatas);
  }, []);

  return (
    <Slider {...settings}>
      {userDatas.map((data, key) => {
        return (
          <>
            <div key={key} className="sliding__Element">
              <div className="user__Contact">
                <h1>{data.name}</h1>
                <p>{data.email}</p>
              </div>
              <div className="user__Comment">
                <p>"{data.body}."</p>
              </div>
            </div>
          </>
        );
      })}
    </Slider>
  );
};

export default TestimonalsSlider;

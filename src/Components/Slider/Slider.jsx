import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonalsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <div>
          <h1>Anıl</h1>
          <p>anil.er@hotmail.com</p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
            reiciendis?
          </p>
        </div>
      </div>
      <div>
        <div>
          <h1>Anıl</h1>
          <p>anil.er@hotmail.com</p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
            reiciendis?
          </p>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonalsSlider;

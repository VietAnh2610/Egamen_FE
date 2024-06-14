import React from "react";
import Slider from "react-slick";
import "./SliderHomeComponet.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SliderHomeComponet = () => {
  const bannerImages = [
    "https://theme.hstatic.net/200000696635/1001199686/14/slider_1.jpg?v=8",
    "https://theme.hstatic.net/200000696635/1001199686/14/slider_2.jpg?v=8",
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div>
      <div className="Home-banner container">
        <Slider {...settings}>
          {bannerImages.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                style={{ maxHeight: "500px", width:"100%" }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderHomeComponet;

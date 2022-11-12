import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CartImg from "./CartImg";

function Cartitems() {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: "slides",
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const lists = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <div>
      <Slider {...settings}>
        {lists.map((item, i) => {
          return (
            <div key={i}>
              <CartImg img={"/img/369.jpg"} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Cartitems;

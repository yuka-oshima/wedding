import React from "react";
import Slider from "react-slick";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 2,
    dots: true,
    arrows: false,
    pauseOnHover: false
  };
  const image = "/images/1st_anniversary.jpg";
  const image2 = "/images/disney_sea.jpg";
  const image3 = "/images/diving_chatan.jpg";
  const image4 = "/images/hokkaido.jpg";
  const image5 = "/images/restaurant_pizza.jpg";
  const image6 = "/images/netherland.jpg";

  const images = [image, image2, image3, image4, image5,image6];
  return (
    <div className="h-auto py-[2em] bg-white">
      <div className="w-min-full">
        <Slider {...settings}>
          {images.map((image) => (
            <img src={image} alt="image" />
          ))}
        </Slider>
      </div>
    </div>
  );
}

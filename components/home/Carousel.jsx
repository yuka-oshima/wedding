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
  const image = "/images/wedding-1.jpg";
  const image2 = "/images/wedding-2.jpg";
  const image3 = "/images/wedding-3.jpg";
  const image4 = "/images/wedding-4.jpg";
  const image5 = "/images/wedding-5.jpg";
  const image6 = "/images/wedding-6.jpg";

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

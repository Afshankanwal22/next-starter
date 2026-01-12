"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    "images/silder7.avif",
    "/images/silder6.avif",
    "/images/silder5.avif",
  ];

  return (
    <div className="max-w-7xl mx-auto mt-6">
      <Slider {...settings}>
        {slides.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-80 md:h-[500px] object-cover "
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

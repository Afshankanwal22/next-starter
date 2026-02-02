"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function HeroSlider() {
  const settings = {
    dots: true,                // Show navigation dots
    infinite: true,            // Loop slides infinitely
    speed: 1000,               // Transition speed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,            // Enable auto-slide
    autoplaySpeed: 4000,       // Slide every 4 seconds
    fade: true,                // Smooth fade transition
    pauseOnHover: true,
    arrows: true,              // Show next/prev arrows
    adaptiveHeight: true,
    appendDots: dots => (
      <div>
        <ul className="flex justify-center gap-3 mt-4">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-3 h-3 bg-gray-300 rounded-full hover:bg-blue-500 transition"></div>
    ),
  };

  const slides = [
    {
      img: "/images/silder7.avif",
      title: "Discover the Latest Electronics",
      subtitle: "High-quality gadgets and wearables",
      button: "Shop Now",
      link: "/shop"
    },
    {
      img: "/images/silder6.avif",
      title: "Trendy Bags & Accessories",
      subtitle: "Upgrade your style with our collection",
      button: "Explore",
      link: "/categories/bags"
    },
    {
      img: "/images/silder5.avif",
      title: "Smart Wearables for You",
      subtitle: "Stay connected, stay stylish",
      button: "Buy Now",
      link: "/categories/wearables"
    }
  ];

  return (
    <div className="w-full overflow-hidden relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full">
            {/* Slide Image */}
            <img
              src={slide.img}
              alt={`Slide ${index + 1}`}
              className="w-full max-w-full h-80 md:h-[500px] lg:h-[600px] object-cover"
            />

            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

            {/* Slide Text */}
            <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-6 md:px-16 lg:px-24 text-white">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg mb-3">
                {slide.title}
              </h2>
              <p className="text-sm md:text-lg mb-4 drop-shadow-md">
                {slide.subtitle}
              </p>
              <a
                href={slide.link}
                className="px-6 py-2 md:px-8 md:py-3 bg-blue-600 hover:bg-blue-500 rounded-full font-semibold shadow-lg transition"
              >
                {slide.button}
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

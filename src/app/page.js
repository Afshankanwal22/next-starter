"use client";

import { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

import HeroSlider from "../components/Silder.jsx";
import ShopByCategory from "../components/ShopByCategory.jsx";
import BestSellers from "../components/BestSellers.jsx";
import NewArrivals from "../components/NewArrivals.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import AddToCartModal from "../components/AddToCartModal.jsx";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const featuredProducts = [
    { id: 1, title: "Stylish Headphones", price: "$29.99", img: "/images/pic1.avif", rating: 4.5 },
    { id: 2, title: "Smart Watch", price: "$39.99", img: "/images/pic2.avif", rating: 5 },
    { id: 3, title: "Casual Sneakers", price: "$19.99", img: "/images/pic3.avif", rating: 3.5 },
    { id: 4, title: "Leather Backpack", price: "$49.99", img: "/images/bags1.avif", rating: 4 },
  ];

  // Function to render stars dynamically
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) stars.push(<FaStar key={i} className="text-yellow-400 inline-block" />);
      else if (rating >= i - 0.5) stars.push(<FaStarHalfAlt key={i} className="text-yellow-400 inline-block" />);
      else stars.push(<FaRegStar key={i} className="text-yellow-400 inline-block" />);
    }
    return stars;
  };

  return (
    <div className="bg-gray-50">
      <Navbar />
      <HeroSlider />
      <ShopByCategory />

      {/* Featured Products */}
      <section className="max-w-screen-xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-4 flex flex-col items-center hover:scale-105 transform transition duration-300 cursor-pointer group overflow-hidden"
            >
              {/* Product Image */}
              <div className="w-full h-40 flex items-center justify-center mb-4">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-contain rounded-xl drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                {product.title}
              </h3>

              {/* Dynamic Star Rating */}
              <div className="flex items-center mt-1">{renderStars(product.rating)}</div>

              <p className="text-blue-600 font-bold mt-2">{product.price}</p>

              {/* Add to Cart Button */}
              <button
                onClick={() => setSelectedProduct(product)}
                className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold shadow-lg transition"
              >
                Add to Cart
              </button>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 via-transparent opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <BestSellers renderStars={renderStars} setSelectedProduct={setSelectedProduct} />

      {/* New Arrivals */}
      <NewArrivals renderStars={renderStars} setSelectedProduct={setSelectedProduct} />

      <Footer />

      {/* Add To Cart Modal */}
      {selectedProduct && (
        <AddToCartModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

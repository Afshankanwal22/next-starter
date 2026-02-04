"use client";

import { useState } from "react";
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
    { id: 1, title: "Stylish Headphones", price: "29.99", img: "/images/pic1.avif" },
    { id: 2, title: "Smart Watch", price: "39.99", img: "/images/pic2.avif" },
    { id: 3, title: "Casual Sneakers", price: "19.99", img: "/images/pic3.avif" },
    { id: 4, title: "Leather Backpack", price: "49.99", img: "/images/bags1.avif" },
  ];

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
            <div key={product.id} className="bg-white p-4 rounded-2xl shadow-lg text-center">
              <img src={product.img} alt={product.title} className="h-40 mx-auto object-contain rounded-xl" />
              <h3 className="mt-2 font-semibold">{product.title}</h3>
              <p className="text-blue-600 font-bold mt-2">${product.price}</p>
              <button
                onClick={() => setSelectedProduct(product)}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <BestSellers setSelectedProduct={setSelectedProduct} />

      {/* New Arrivals */}
      <NewArrivals setSelectedProduct={setSelectedProduct} />

      <Footer />

      {/* AddToCart Modal */}
      {selectedProduct && (
        <AddToCartModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

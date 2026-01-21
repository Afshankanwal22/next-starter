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

  return (
    <div>
      <Navbar />
      <HeroSlider />
      <ShopByCategory />

      {/* Featured Section */}
      <section className="max-w-7xl mx-auto mt-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              id: 1,
              title: "Stylish Headphones",
              price: "$29.99",
              img: "/images/pic1.avif",
              rating: 4,
            },
            { id: 2, title: "Smart Watch", price: "$39.99", img: "/images/pic2.avif", rating: 5 }, { id: 3, title: "Casual Sneakers", price: "$19.99", img: "/images/pic3.avif", rating: 4 }, { id: 4, title: "Leather Backpack", price: "$49.99", img: "/images/bags1.avif", rating: 5 },
          ].map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-xl">
              <img src={product.img} className="h-40 w-full object-cover" />
              <h3>{product.title}</h3>
              <p>{product.price}</p>

              <button
                onClick={() => setSelectedProduct(product)}
                className="w-full bg-blue-600 text-white py-2 rounded-lg"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      <BestSellers />
      <NewArrivals />
      <Footer />

      {selectedProduct && (
        <AddToCartModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

"use client";

import AddToCartModal from "@/components/AddToCartModal";
import { useState } from "react";

export default function BestSellers() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const bestSellers = [
    { id: "p1", name: "Premium Wireless Headphones", desc: "Premium Wireless Headphones", price: "299.99", img: "/images/Headphones.avif" },
    { id: "p2", name: "Smart Watch Pro", desc: "Smart Watch Pro", price: "399.99", img: "/images/Smart Watch Pro.avif" },
    { id: "p3", name: "Professional Camera", desc: "Professional Camera", price: "1299.99", img: "/images/Professional Camera.avif" },
    { id: "p4", name: "Sunglasses Classic", desc: "Sunglasses Classic", price: "159.99", img: "/images/Sunglasses Classic.avif" },
  ];

  return (
    <section className="max-w-screen-xl mx-auto mt-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Best Sellers</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {bestSellers.map((item) => (
          <div
            key={item.id}
            className="bg-white/80 backdrop-blur rounded-2xl shadow-xl p-4 flex flex-col items-center hover:scale-105 transition"
          >
            <div className="w-full h-48 mb-4">
              <img
                src={item.img}
                className="w-full h-full object-contain"
                alt={item.name}
              />
            </div>

            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p className="text-gray-500 text-sm">{item.desc}</p>
            <p className="text-blue-600 font-bold mt-2">${item.price}</p>

            {/* Add to Cart Button */}
            <button
              onClick={() => setSelectedProduct(item)}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* AddToCartModal */}
      {selectedProduct && (
        <AddToCartModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}


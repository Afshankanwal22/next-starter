"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ShopPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("product")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching products:", error.message);
      } else {
        setProducts(data || []);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      {/* Page Header */}
      <section className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Shop Our Products</h1>
          <p className="mt-2 text-lg">Browse and add your favorite items to the cart</p>
        </div>
      </section>

      {/* Products Grid */}
      <main className="flex-grow container mx-auto px-4 py-10">
        {products.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No products available right now.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-4 flex flex-col items-center hover:scale-105 transform transition duration-300 cursor-pointer group overflow-hidden"
              >
                {/* Product Image */}
                <div className="w-full h-48 flex items-center justify-center mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain rounded-xl drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <h2 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  {product.name}
                </h2>
                <p className="text-gray-500 text-sm mt-1">{product.description || product.name}</p>
                <p className="text-blue-600 font-bold mt-2">Rs. {product.price}</p>

                {/* Add to Cart Button */}
                <button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold shadow-lg transition">
                  Add to Cart
                </button>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 via-transparent opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-10">
        <Footer />
      </footer>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AddToCartModal from "@/components/AddToCartModal";

export default function ShopPage() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("product")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) console.error(error.message);
      else setProducts(data || []);
    };
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <section className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-8 text-center">
        <h1 className="text-4xl font-bold">Shop Our Products</h1>
        <p className="mt-2 text-lg">Browse and add your favorite items to the cart</p>
      </section>

      <main className="flex-grow container mx-auto px-4 py-10">
        {products.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No products available right now.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-4 flex flex-col items-center hover:scale-105 transition duration-300 cursor-pointer group overflow-hidden"
              >
                <img
                  src={product.image || "/images/pic1.avif"}
                  alt={product.name}
                  className="w-full h-48 object-contain rounded-xl mb-4"
                />
                <h2 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  {product.name}
                </h2>
                <p className="text-blue-600 font-bold mt-2">Rs. {product.price}</p>

                <button
                  onClick={() => setSelectedProduct(product)}
                  className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold shadow-lg transition"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </main>

      <AddToCartModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />

      <Footer />
    </div>
  );
}

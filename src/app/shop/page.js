"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

// ✅ Import your existing components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ShopPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await supabase
        .from("product")
        .select("*")
        .order("created_at", { ascending: false });

      setProducts(data || []);
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 px-6 py-10">
      <Navbar /> {/* Navbar now works */}

      <header className="text-center py-6">
        <h1 className="text-3xl font-bold">Shop Products</h1>
      </header>

      <main className="flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md p-4 flex flex-col"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-cover rounded-lg"
              />
              <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600 mt-1">Rs. {product.price}</p>
              <button className="mt-auto w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>

      <Footer /> {/* Footer now works */}
    </div>
  );
}

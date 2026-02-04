"use client";
import { useState } from "react";

export default function AddToCartModal({ product, onClose }) {
  const [qty, setQty] = useState(1);

  if (!product) return null;

  const price = Number(product.price.replace("$", ""));

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={onClose}
      />

      {/* Side Drawer */}
      <div className="fixed top-0 right-0 h-full w-[360px] bg-white z-50 shadow-2xl transform transition-transform duration-300">
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Your Cart</h2>
            <button onClick={onClose} className="text-2xl hover:rotate-90 transition">✕</button>
          </div>

          {/* Product Info */}
          <div className="flex gap-4 items-center mb-4">
            <img src={product.img} className="w-20 h-20 object-contain rounded-lg" />
            <div>
              <h3 className="font-semibold">{product.title || product.name}</h3>
              <p className="text-blue-600 font-bold">{product.price}</p>
            </div>
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-4 mt-4">
            <span className="font-semibold">Quantity:</span>
            <div className="flex items-center border rounded-lg overflow-hidden">
              <button onClick={() => qty > 1 && setQty(qty - 1)} className="px-4 py-1">−</button>
              <span className="px-4">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="px-4 py-1">+</button>
            </div>
          </div>

          <div className="mt-6 font-bold text-lg">Total: ${(price * qty).toFixed(2)}</div>

          <button className="mt-auto bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-semibold shadow-lg">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
}

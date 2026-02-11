"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddToCartModal({ product, onClose }) {
  const [qty, setQty] = useState(1);
  const router = useRouter();

  if (!product) return null;

  const price =
    typeof product.price === "string"
      ? Number(product.price.replace("$", "").replace("Rs.", ""))
      : Number(product.price);

  // ✅ FIXED CHECKOUT HANDLER
  const handleCheckout = () => {
    const checkoutItem = {
      title: product.title || product.name,
      price: price,
      qty: qty,
      img: product.img || product.image,
      total: price * qty,
    };

    // 🔥 VERY IMPORTANT
    localStorage.setItem("checkoutItem", JSON.stringify(checkoutItem));

    router.push("/CheckoutPage");
  };

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose} />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-[360px] bg-white z-50 shadow-2xl">
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Your Cart</h2>
            <button onClick={onClose} className="text-2xl">✕</button>
          </div>

          <div className="flex gap-4 items-center mb-4">
            <img
              src={product.img}
              className="w-20 h-20 object-contain"
              alt={product.name}
            />
            <div>
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-blue-600 font-bold">Rs. {price}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <span className="font-semibold">Quantity:</span>
            <div className="flex border rounded-lg">
              <button onClick={() => qty > 1 && setQty(qty - 1)} className="px-3">−</button>
              <span className="px-3">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="px-3">+</button>
            </div>
          </div>

          <div className="mt-6 font-bold">
            Total: Rs. {(price * qty).toFixed(2)}
          </div>

          <button
            onClick={handleCheckout}
            className="mt-auto bg-blue-600 text-white py-3 rounded-xl"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
}

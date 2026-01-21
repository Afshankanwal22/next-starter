"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddToCartModal({ product, onClose }) {
  const [qty, setQty] = useState(1);
  const router = useRouter();

  if (!product) return null;

  // price number nikalna ($ remove)
  const price = Number(product.price.replace("$", ""));
  const total = (price * qty).toFixed(2);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 animate-scaleIn relative">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-xl"
        >
          ✕
        </button>

        {/* Product */}
        <div className="flex gap-4">
          <img
            src={product.img}
            alt={product.title}
            className="w-24 h-24 object-cover rounded-lg"
          />

          <div>
            <h3 className="font-bold text-gray-800">
              {product.title}
            </h3>
            <p className="text-blue-600 font-semibold">
              ${price}
            </p>
          </div>
        </div>

        {/* Quantity */}
        <div className="mt-6">
          <p className="font-medium text-gray-700 mb-2">
            Quantity
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => qty > 1 && setQty(qty - 1)}
              className="w-10 h-10 rounded-full border text-xl hover:bg-gray-100"
            >
              −
            </button>

            <span className="text-lg font-semibold">
              {qty}
            </span>

            <button
              onClick={() => setQty(qty + 1)}
              className="w-10 h-10 rounded-full border text-xl hover:bg-gray-100"
            >
              +
            </button>
          </div>
        </div>

        {/* Total */}
        <div className="flex justify-between items-center mt-6 border-t pt-4">
          <span className="text-gray-600 font-medium">
            Total
          </span>
          <span className="text-xl font-bold text-blue-600">
            ${total}
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            className="w-1/2 border rounded-lg py-2 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              // checkout ke liye data save
              localStorage.setItem(
                "checkoutItem",
                JSON.stringify({
                  ...product,
                  qty,
                  total,
                })
              );

              onClose();
              router.push("/checkout");
            }}
            className="w-1/2 bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";

export default function CheckoutPage() {
  const [item, setItem] = useState(null);
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("checkoutItem");
    if (data) setItem(JSON.parse(data));
  }, []);

  if (orderPlaced) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            🎉 Order Placed Successfully!
          </h2>

          <p className="text-gray-600 mb-2">Thank you for shopping with us.</p>
          <p className="text-gray-700 font-medium">
            Your order will be delivered within{" "}
            <span className="text-blue-600 font-semibold">2–3 working days</span>.
          </p>

          <button
            onClick={() => (window.location.href = "/")}
            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        No items found for checkout.
      </div>
    );
  }

  const shipping = 5;
  const totalAmount = (Number(item.total) + shipping).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Checkout</h2>

          <h3 className="font-semibold text-gray-700 mb-4">Shipping Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <input className="input" placeholder="First Name" />
            <input className="input" placeholder="Last Name" />
            <input className="input md:col-span-2" placeholder="Email Address" />
            <input className="input md:col-span-2" placeholder="Street Address" />
            <input className="input" placeholder="City" />
            <input className="input" placeholder="Phone Number" />
          </div>

          <h3 className="font-semibold text-gray-700 mb-4">Payment Method</h3>
          <div className="space-y-3">
            <label className="payment-option">
              <input type="radio" name="payment" defaultChecked />
              <span>Cash on Delivery</span>
            </label>
            <label className="payment-option">
              <input type="radio" name="payment" />
              <span>Credit / Debit Card</span>
            </label>
            <label className="payment-option">
              <input type="radio" name="payment" />
              <span>EasyPaisa / JazzCash</span>
            </label>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h3>

          <div className="flex gap-4 mb-4">
            <img
              src={item.img || item.image || "/images/pic1.avif"}
              alt={item.title || item.name}
              className="w-20 h-20 object-cover rounded-lg"
            />

            <div>
              <h4 className="font-semibold text-gray-800">{item.title || item.name}</h4>
              <p className="text-sm text-gray-500">Quantity: {item.qty}</p>
              <p className="text-blue-600 font-semibold">${Number(item.price).toFixed(2)}</p>
            </div>
          </div>

          <div className="border-t pt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${Number(item.total).toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>

            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${totalAmount}</span>
            </div>
          </div>

          <button
            onClick={() => {
              setOrderPlaced(true);
              localStorage.removeItem("checkoutItem");
            }}
            className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

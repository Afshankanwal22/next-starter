"use client";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 text-gray-200 pt-12 pb-6 overflow-hidden">
      {/* Decorative Background Circles */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-blue-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-purple-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* 1️⃣ Brand & Description */}
        <div >
          <img
  src="/images/logo.jpeg"
  alt="Zanorox Logo"
  className="w-15 object-contain rounded-lg shadow-xl animate-pulse"
/>
<span className="font-bold text-xl text-white-800 tracking-wide">
            Zanorox
          </span>

          <p className="text-gray-400 text-sm">
            Your one-stop shop for electronics, wearables, bags, and more.
            Discover amazing deals and enjoy fast, secure shopping!
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-blue-500 transition transform hover:scale-110">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-500 transition transform hover:scale-110">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* 2️⃣ Quick Links */}
        <div>
          <h2 className="font-semibold text-white mb-4 text-lg">Quick Links</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="/products" className="hover:text-blue-500 transition">Products</a></li>
            <li><a href="/cart" className="hover:text-blue-500 transition">Cart</a></li>
            <li><a href="/dashboard" className="hover:text-blue-500 transition">Dashboard</a></li>
            <li><a href="/categories" className="hover:text-blue-500 transition">Categories</a></li>
            <li><a href="/contact" className="hover:text-blue-500 transition">Contact Us</a></li>
          </ul>
        </div>

        {/* 3️⃣ Top Categories */}
        <div>
          <h2 className="font-semibold text-white mb-4 text-lg">Top Categories</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="/categories/electronics" className="hover:text-blue-500 transition">Electronics</a></li>
            <li><a href="/categories/wearables" className="hover:text-blue-500 transition">Wearables</a></li>
            <li><a href="/categories/bags" className="hover:text-blue-500 transition">Bags</a></li>
            <li><a href="/categories/accessories" className="hover:text-blue-500 transition">Accessories</a></li>
            <li><a href="/categories/footwear" className="hover:text-blue-500 transition">Footwear</a></li>
          </ul>
        </div>

        {/* 4️⃣ Contact Info */}
        <div>
          <h2 className="font-semibold text-white mb-4 text-lg">Contact Us</h2>
          <p className="text-gray-400 text-sm">
            Email: <a href="mailto:support@shophub.com" className="hover:text-blue-500 transition">support@shophub.com</a>
          </p>
          <p className="text-gray-400 text-sm mt-1">
            Phone: <a href="tel:+15551234567" className="hover:text-blue-500 transition">+1 (555) 123-4567</a>
          </p>
          <p className="text-gray-400 mt-3 text-xs italic">
            Fast shipping, secure payments, and 24/7 customer support!
          </p>
        </div>
      </div>

      {/* 5️⃣ Bottom Bar */}
      <div className="relative z-10 mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        © 2025 Zanorox. All rights reserved.
      </div>
    </footer>
  );
}

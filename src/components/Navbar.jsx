"use client";

import { useState } from "react";
import Link from "next/link";
import { FiShoppingCart, FiMenu, FiX, FiUser } from "react-icons/fi"; // FiUser added

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(2);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          <img src="/logo.jpeg" alt=""width={50} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/shop" className="hover:text-blue-600 transition">
            Shop
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
          
        </div>

        {/* Search + Cart */}
        <div className="hidden md:flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search products..."
            className="border rounded-full px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div className="relative">
            <FiShoppingCart size={24} className="text-gray-700" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
            
          </div>
          {/* Login Button */}
          <Link
            href="/login"
            className="flex items-center space-x-1 border border-blue-600 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-600 hover:text-white transition"
          >
            <FiUser />
            <span>Login</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-4">
          <Link href="/" className="block hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/shop" className="block hover:text-blue-600 transition">
            Shop
          </Link>
          <Link href="/about" className="block hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/contact" className="block hover:text-blue-600 transition">
            Contact
          </Link>
          {/* Mobile Login */}
          <Link
            href="/login"
            className="flex items-center space-x-1 border border-blue-600 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-600 hover:text-white transition"
          >
            <FiUser />
            <span>Login</span>
          </Link>

          <div className="flex items-center space-x-2 mt-2">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-full px-3 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div className="relative">
              <FiShoppingCart size={24} className="text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

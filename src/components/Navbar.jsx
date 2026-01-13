"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FiShoppingCart,
  FiMenu,
  FiX,
  FiUser,
  FiSearch,
} from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount] = useState(2);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
         <img
  src="/images/logo.jpeg"
  alt="Zanorox Logo"
  className="w-15  object-contain rounded-lg shadow-xl animate-pulse"
/>

          <span className="font-bold text-xl text-gray-800 tracking-wide">
            Zanorox
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          {["Home", "Shop", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">

          {/* Search */}
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 " />
            <input
              type="text"
              placeholder="Search products..."
              className="pl-9 pr-4 py-2 w-56 rounded-full border focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Cart */}
          <div className="relative cursor-pointer hover:scale-105 transition">
            <FiShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-pulse">
                {cartCount}
              </span>
            )}
          </div>

          {/* Login */}
          <Link
            href="/login"
            className="flex items-center gap-1 px-4 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition"
          >
            <FiUser />
            Login
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 border-t">
          {["Home", "Shop", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="block font-medium text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}

          <Link
            href="/login"
            className="flex items-center gap-2 w-fit border border-blue-600 px-4 py-2 rounded-full text-blue-600"
          >
            <FiUser /> Login
          </Link>
        </div>
      )}
    </nav>
  );
}

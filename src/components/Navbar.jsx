"use client";

import { useState } from "react";
import Link from "next/link";
import { FiShoppingCart, FiMenu, FiX, FiUser, FiSearch } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount] = useState(2);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-200 shadow-lg overflow-hidden">
      {/* Decorative Background Circles */}
      <div className="absolute top-[-5rem] left-[-5rem] w-56 h-56 bg-blue-600 rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-[-5rem] right-[-5rem] w-56 h-56 bg-purple-600 rounded-full opacity-20 blur-3xl animate-pulse pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/images/logo.jpeg"
            alt="Zanorox Logo"
            className="w-15 h-12 object-contain rounded-lg shadow-xl animate-pulse"
          />
          <span className="font-bold text-xl text-white tracking-wide">
            Zanorox
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-200">
          {["Home", "Shop", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="relative group hover:text-blue-400 transition"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="pl-9 pr-4 py-2 w-56 rounded-full border border-gray-700 bg-gray-800 text-gray-200 focus:ring-2 focus:ring-blue-400 outline-none"
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
            className="flex items-center gap-1 px-4 py-2 rounded-full border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white transition"
          >
            <FiUser />
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-200 z-20"
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800/90 backdrop-blur-md px-4 sm:px-6 lg:px-8 py-4 space-y-4 border-t border-gray-700 text-gray-200">
          {["Home", "Shop", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="block font-medium hover:text-blue-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}

          <Link
            href="/login"
            className="flex items-center gap-2 w-fit border border-blue-600 px-4 py-2 rounded-full text-blue-400 hover:bg-blue-600 hover:text-white transition"
          >
            <FiUser /> Login
          </Link>
        </div>
      )}
    </nav>
  );
}

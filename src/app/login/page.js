"use client";

import { useState } from "react";
import Link from "next/link";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in:", { email, password });
    // 🔹 Firebase/Supabase login call yahan
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md relative overflow-hidden">
        
        {/* Decorative Circles for Realistic Feel */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-200 rounded-full opacity-50"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-300 rounded-full opacity-50"></div>

        <h2 className="text-3xl font-bold text-center text-blue-600 relative z-10">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mt-2 relative z-10">
          Login to your ShopHub account
        </p>

        <form className="mt-8 relative z-10" onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition"
            />
          </div>

          {/* Password */}
          <div className="mb-6 relative">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-9 right-4 text-gray-400 hover:text-gray-700 transition"
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition shadow-md"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6 relative z-10">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-400">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Login Buttons */}
        <div className="flex flex-col space-y-3 relative z-10">
          <button className="w-full flex items-center justify-center border border-gray-300 py-3 rounded-xl hover:bg-gray-100 transition">
            <img
              src="/images/google-logo.png"
              alt="Google"
              className="w-6 h-6 mr-2"
            />
            Login with Google
          </button>
          <button className="w-full flex items-center justify-center border border-gray-300 py-3 rounded-xl hover:bg-gray-100 transition">
            <img
              src="/images/facebook-logo.png"
              alt="Facebook"
              className="w-6 h-6 mr-2"
            />
            Login with Facebook
          </button>
        </div>

        {/* Signup Link */}
        <p className="mt-6 text-center text-gray-500 relative z-10">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-600 font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

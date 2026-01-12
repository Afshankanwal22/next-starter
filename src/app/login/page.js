"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Swal from "sweetalert2";
import { supabase } from "@/lib/supabaseClient";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.message,
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Login Successful 🎉",
      text: "Welcome back to ShopHub",
      timer: 1500,
      showConfirmButton: false,
    });

    // 🔁 Redirect to Home Page
    setTimeout(() => {
      router.push("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md relative overflow-hidden">
        
        {/* Decorative Circles */}
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
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-400"
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
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-400 pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-9 right-4 text-gray-400"
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Signup Link */}
        <p className="mt-6 text-center text-gray-500 relative z-10">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-600 font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

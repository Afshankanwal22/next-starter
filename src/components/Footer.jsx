"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* 1️⃣ Brand & Description */}
        <div>
          <h1 className="text-3xl font-bold text-white mb-3">ShopHub</h1>
          <p className="text-gray-400">
            Your one-stop shop for electronics, wearables, bags, and more.
            Discover amazing deals and enjoy fast, secure shopping!
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-blue-500 transition">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.891h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.891h-2.33v6.987C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 0 1-3.14.86 4.48 4.48 0 0 0 1.95-2.46 9.03 9.03 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.44 2c-2.5 0-4.5 2.2-4.5 4.9 0 .38.05.75.14 1.1C7.73 7.85 4.1 5.88 1.67 2.9a5.06 5.06 0 0 0-.61 2.48c0 1.71.87 3.22 2.19 4.1a4.48 4.48 0 0 1-2.04-.57v.05c0 2.39 1.68 4.38 3.9 4.84a4.48 4.48 0 0 1-2.02.08c.57 1.86 2.23 3.22 4.18 3.26A9 9 0 0 1 1 19.54 12.7 12.7 0 0 0 7 21c8.34 0 12.9-7.29 12.9-13.61v-.62A9.22 9.22 0 0 0 23 3z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm8 3.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-4 1c-2.21 0-4 1.79-4 4s1.79 4 4 4a4 4 0 0 0 0-8zm0 1.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* 2️⃣ Quick Links */}
        <div>
          <h2 className="font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/products" className="hover:text-blue-500 transition">Products</a></li>
            <li><a href="/cart" className="hover:text-blue-500 transition">Cart</a></li>
            <li><a href="/dashboard" className="hover:text-blue-500 transition">Dashboard</a></li>
            <li><a href="/categories" className="hover:text-blue-500 transition">Categories</a></li>
            <li><a href="/contact" className="hover:text-blue-500 transition">Contact Us</a></li>
          </ul>
        </div>

        {/* 3️⃣ Top Categories */}
        <div>
          <h2 className="font-semibold text-white mb-4">Top Categories</h2>
          <ul className="space-y-2">
            <li><a href="/categories/electronics" className="hover:text-blue-500 transition">Electronics</a></li>
            <li><a href="/categories/wearables" className="hover:text-blue-500 transition">Wearables</a></li>
            <li><a href="/categories/bags" className="hover:text-blue-500 transition">Bags</a></li>
            <li><a href="/categories/accessories" className="hover:text-blue-500 transition">Accessories</a></li>
            <li><a href="/categories/footwear" className="hover:text-blue-500 transition">Footwear</a></li>
          </ul>
        </div>

        {/* 4️⃣ Contact Info */}
        <div>
          <h2 className="font-semibold text-white mb-4">Contact Us</h2>
          <p className="text-gray-400">Email: <a href="mailto:support@shophub.com" className="hover:text-blue-500 transition">support@shophub.com</a></p>
          <p className="text-gray-400 mt-1">Phone: <a href="tel:+15551234567" className="hover:text-blue-500 transition">+1 (555) 123-4567</a></p>
          <p className="text-gray-400 mt-3 text-sm">
            Fast shipping, secure payments, and 24/7 customer support!
          </p>
        </div>
      </div>

      {/* 5️⃣ Bottom Bar */}
      <div className="bg-gray-800 text-gray-500 text-center py-4 mt-6">
        © 2025 ShopHub. All rights reserved.
      </div>
    </footer>
  );
}

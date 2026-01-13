"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Swal from "sweetalert2";
import { FiUser, FiMail, FiMessageCircle } from "react-icons/fi";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "🎉 Message Sent!",
      html: `
        <p style="font-size:16px">
          Thanks for reaching out 💙<br/>
          Our team will contact you very soon.
        </p>
      `,
      icon: "success",
      confirmButtonText: "Awesome 🚀",
      confirmButtonColor: "#2563eb",
    });

    e.target.reset();
  };

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* CONTACT SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-blue-100 via-white to-blue-50 overflow-hidden">

        {/* Background Blobs */}
        <div className="absolute top-0 -left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 -right-10 w-72 h-72 bg-purple-400 rounded-full blur-3xl opacity-30"></div>

        <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
              Let’s Talk <br />
              <span className="text-blue-600">We’re Here 💬</span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg max-w-md">
              Questions about orders, payments, or products?
              Our ecommerce experts are ready to help ✨
            </p>

            <div className="mt-10 space-y-4 text-gray-700">
              <p>📍 Karachi, Pakistan</p>
              <p>📧 support@shopease.com</p>
              <p>📞 +92 300 1234567</p>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl p-10">
            <h2 className="text-2xl font-bold text-center mb-8">
              Send us a message 🚀
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="relative">
                <FiUser className="absolute left-4 top-4 text-gray-400" />
                <input
                  required
                  placeholder="Your Name"
                  className="w-full pl-12 py-3 rounded-xl border"
                />
              </div>

              <div className="relative">
                <FiMail className="absolute left-4 top-4 text-gray-400" />
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  className="w-full pl-12 py-3 rounded-xl border"
                />
              </div>

              <div className="relative">
                <FiMessageCircle className="absolute left-4 top-4 text-gray-400" />
                <textarea
                  rows="4"
                  required
                  placeholder="Your Message"
                  className="w-full pl-12 py-3 rounded-xl border"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition"
              >
                Send Message 💌
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

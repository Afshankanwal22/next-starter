"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>     
 {/* NAVBAR */}
        <Navbar />
    <section className="bg-gray-50 overflow-hidden">

      {/* HERO SECTION */}
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center relative z-10">
          <span className="uppercase tracking-widest text-sm opacity-80">
            Welcome to ShopEase
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-4 leading-tight drop-shadow-lg">
            Shopping Made <br /> Simple & Stylish
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-lg opacity-90 drop-shadow-sm">
            Discover products you love, prices you trust, and an experience
            designed just for you.
          </p>
          <a
            href="/shop"
            className="mt-10 inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transform transition shadow-lg"
          >
            Start Shopping →
          </a>
        </div>

        {/* Floating Shapes */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[120%] h-32 bg-gray-50 rounded-t-full"></div>
      </div>

      {/* STORY SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        
        {/* TEXT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Our Story ✨
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            ShopEase was built with one simple idea — shopping should feel exciting,
            effortless, and trustworthy. No confusion. No stress.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            From trending fashion to everyday essentials, we bring hand-picked
            products that fit your lifestyle and budget.
          </p>

          <div className="flex gap-6 mt-6">
            <div className="bg-blue-50 px-6 py-4 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1 text-center">
              <h3 className="text-2xl font-bold text-blue-600">10K+</h3>
              <p className="text-sm text-gray-500">Happy Customers</p>
            </div>
            <div className="bg-blue-50 px-6 py-4 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1 text-center">
              <h3 className="text-2xl font-bold text-blue-600">1.5K+</h3>
              <p className="text-sm text-gray-500">Products</p>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative group">
          <img
            src="https://images.unsplash.com/photo-1607082349566-1870bcd1e90f"
            alt="Ecommerce Experience"
            className="rounded-3xl shadow-2xl transform group-hover:scale-105 transition duration-500"
          />
          <div className="absolute top-6 right-6 bg-white px-5 py-3 rounded-xl shadow-lg">
            <p className="text-sm text-gray-500">Trusted by</p>
            <p className="text-xl font-bold text-blue-600">Thousands 💙</p>
          </div>
        </div>
      </div>

      {/* WHY WE ARE DIFFERENT */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-14">
            Why Customers Love Us ❤️
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
            {[
              {
                title: "Premium Quality",
                emoji: "💎",
                desc: "Every product is carefully selected & quality-checked."
              },
              {
                title: "Secure Checkout",
                emoji: "🔒",
                desc: "Your payments are safe and protected."
              },
              {
                title: "Fast Delivery",
                emoji: "🚚",
                desc: "Quick shipping with real-time tracking."
              },
              {
                title: "Friendly Support",
                emoji: "🤝",
                desc: "We’re always here when you need us."
              }
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-3 hover:scale-105"
              >
                <div className="text-5xl mb-4 animate-bounce">{item.emoji}</div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-24 text-center text-white relative">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
            Ready to Start Shopping?
          </h2>
          <p className="opacity-90 mb-8 drop-shadow-sm">
            Join thousands of happy customers today.
          </p>
          <a
            href="/shop"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transform transition shadow-lg"
          >
            Explore Products →
          </a>
        </div>

        {/* Decorative Circles */}
        <div className="absolute -top-16 -left-16 w-40 h-40 bg-blue-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-purple-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      </div>
    </section>
    {/* FOOTER SPACING */}
    <Footer />
    </>
  );
}

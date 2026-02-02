"use client";

export default function NewArrivals() {
  const arrivals = [
    {
      name: "Smart Watch Pro",
      desc: "Advanced smartwatch with fitness tracking, heart rate monitoring, and GPS.",
      price: "$399.99",
      img: "/images/Watch.avif",
    },
    {
      name: "Leather Wallet",
      desc: "Genuine leather wallet with RFID protection and multiple card slots.",
      price: "$49.99",
      img: "/images/Leather Wallet.avif",
    },
    {
      name: "Portable Bluetooth Speaker",
      desc: "Compact wireless speaker with 360-degree sound and waterproof design.",
      price: "$79.99",
      img: "/images/new2.avif",
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
        New Arrivals
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {arrivals.map((item, index) => (
          <div
            key={index}
            className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-4 flex flex-col items-center hover:scale-105 transform transition duration-300 cursor-pointer group overflow-hidden"
          >
            {/* Product Image */}
            <div className="w-full h-48 flex items-center justify-center mb-4">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-contain rounded-xl drop-shadow-md group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Product Info */}
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
              {item.name}
            </h3>
            <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
            <p className="text-blue-600 font-bold mt-2">{item.price}</p>

            {/* Optional CTA Button */}
            <button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold shadow-lg transition">
              Add to Cart
            </button>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 via-transparent opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";

export default function NewArrivals({ setSelectedProduct }) {
  const arrivals = [
    { name: "Smart Watch Pro", desc: "Advanced smartwatch with fitness tracking", price: "399.99", img: "/images/Watch.avif" },
    { name: "Leather Wallet", desc: "Genuine leather wallet with RFID protection", price: "49.99", img: "/images/Leather Wallet.avif" },
    { name: "Portable Bluetooth Speaker", desc: "Compact wireless speaker with 360-degree sound", price: "79.99", img: "/images/new2.avif" },
  ];

  return (
    <section className="max-w-screen-xl mx-auto mt-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        New Arrivals
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {arrivals.map((item, i) => (
          <div
            key={i}
            className="bg-white/80 backdrop-blur rounded-2xl shadow-xl p-4 flex flex-col items-center hover:scale-105 transition"
          >
            <div className="w-full h-48 mb-4">
              <img
                src={item.img}
                className="w-full h-full object-contain"
                alt={item.name}
              />
            </div>

            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p className="text-gray-500 text-sm">{item.desc}</p>
            <p className="text-blue-600 font-bold mt-2">${item.price}</p>

            {/* Button only sets selectedProduct in Home */}
            <button
              onClick={() => setSelectedProduct(item)}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

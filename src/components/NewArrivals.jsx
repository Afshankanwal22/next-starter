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
    <section className="max-w-7xl mx-auto mt-12 px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">New Arrivals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {arrivals.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-2 font-semibold text-gray-800">{item.name}</h3>
            <p className="text-gray-500 text-sm">{item.desc}</p>
            <p className="text-blue-600 font-bold mt-2">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";

export default function BestSellers() {
  const bestSellers = [
    { name:"Premium Wireless Headphones", desc:"Premium Wireless Headphones", price:"$299.99", img:"/images/Headphones.avif" },
    { name:"Smart Watch Pro", desc:"Smart Watch Pro", price:"$399.99", img:"/images/Smart Watch Pro.avif" },
    { name:"Professional Camera", desc:"Professional Camera", price:"$1299.99", img:"/images/Professional Camera.avif" },
    { name:"Sunglasses Classic", desc:"Sunglasses Classic", price:"$159.99", img:"/images/Sunglasses Classic.avif" },
  ];

  return (
    <section className="max-w-screen-xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
        Best Sellers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {bestSellers.map((item, i) => (
          <div
            key={i}
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

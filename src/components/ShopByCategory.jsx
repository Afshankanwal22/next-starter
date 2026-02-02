export default function ShopByCategory() {
  const categories = [
    { name: "Electronics", items: 45, img: "/images/electronics.avif" },
    { name: "Wearables", items: 23, img: "/images/wearables.avif" },
    { name: "Bags", items: 34, img: "/images/bags.avif" },
    { name: "Accessories", items: 56, img: "/images/accessories.avif" },
    { name: "Footwear", items: 28, img: "/images/footwear.avif" },
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
        Shop by Category
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-4 flex flex-col items-center justify-center hover:scale-105 transform transition duration-300 cursor-pointer group overflow-hidden"
          >
            {/* Image */}
            <div className="w-full h-36 flex items-center justify-center mb-4">
              <img
                src={cat.img}
                alt={cat.name}
                className="max-h-full max-w-full object-contain rounded-xl drop-shadow-md group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Category Info */}
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
              {cat.name}
            </h3>
            <p className="text-gray-500 text-sm mt-1">{cat.items} items</p>

            {/* Hover Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 via-transparent opacity-0 group-hover:opacity-30 rounded-2xl transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

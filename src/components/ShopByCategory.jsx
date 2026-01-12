export default function ShopByCategory() {
  const categories = [
    { name: "Electronics", items: 45, img: "/images/electronics.avif" },
    { name: "Wearables", items: 23, img: "/images/wearables.avif" },
    { name: "Bags", items: 34, img: "/images/bags.avif" },
    { name: "Accessories", items: 56, img: "/images/accessories.avif" },
    { name: "Footwear", items: 28, img: "/images/footwear.avif" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 mt-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Shop by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center hover:scale-105 transform transition"
          >
            <img src={cat.img} alt={cat.name} className="h-30 w-50 object-contain mb-2" />
            <h3 className="text-lg font-semibold">{cat.name}</h3>
            <p className="text-gray-500">{cat.items} items</p>
          </div>
        ))}
      </div>
    </section>
  );
}

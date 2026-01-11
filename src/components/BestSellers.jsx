"use client";
export default function BestSellers() {
  const bestSellers = [
    { name:"Premium Wireless Headphones", desc:"Premium Wireless Headphones", price:"$299.99", img:"/images/best1.jpg" },
    { name:"Smart Watch Pro", desc:"Smart Watch Pro", price:"$399.99", img:"/images/best2.jpg" },
    { name:"Professional Camera", desc:"Professional Camera", price:"$1299.99", img:"/images/best3.jpg" },
    { name:"Sunglasses Classic", desc:"Sunglasses Classic", price:"$159.99", img:"/images/best4.jpg" },
  ];

  return (
    <section className="max-w-7xl mx-auto mt-12 px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Best Sellers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {bestSellers.map((item,i)=>(
          <div key={i} className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition">
            <img src={item.img} alt={item.name} className="w-full h-48 object-cover rounded" />
            <h3 className="mt-2 font-semibold text-gray-800">{item.name}</h3>
            <p className="text-gray-500">{item.desc}</p>
            <p className="text-blue-600 font-bold mt-1">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

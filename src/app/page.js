import HeroSlider from "../components/Silder.jsx";
import ShopByCategory from "../components/ShopByCategory.jsx";
import BestSellers from "../components/BestSellers.jsx";
import NewArrivals from "../components/NewArrivals.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <div>
      {/*Navbar */}
      <Navbar />

      {/* Hero Slider */}
      <HeroSlider />
      {/* shopbycategory */}
      <ShopByCategory />

{/* Featured Section */}
<section className="max-w-7xl mx-auto mt-16 px-6">
  <div className="flex items-center justify-between mb-8">
    <h2 className="text-3xl font-bold text-gray-800">
      Featured Products
    </h2>
    <button className="text-blue-600 font-medium hover:underline">
      View All →
    </button>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

    {/* Product Card */}
    {[
      {
        id: 1,
        title: "Stylish Headphones",
        price: "$29.99",
        img: "/images/pic1.avif",
        rating: 4
      },
      {
        id: 2,
        title: "Smart Watch",
        price: "$39.99",
        img: "/images/pic2.avif",
        rating: 5
      },
      {
        id: 3,
        title: "Casual Sneakers",
        price: "$19.99",
        img: "/images/pic3.avif",
        rating: 4
      },
      {
        id: 4,
        title: "Leather Backpack",
        price: "$49.99",
        img: "/images/bags1.avif",
        rating: 5
      }
    ].map((product) => (
      <div
        key={product.id}
        className="group bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
      >

        {/* Image */}
        <div className="relative">
          <img
            src={product.img}
            alt={product.title}
            className="w-full h-52 object-cover group-hover:scale-105 transition"
          />

          {/* Badge */}
          <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
            Featured
          </span>
        </div>

        {/* Content */}
        <div className="p-4 space-y-2">
          <h3 className="font-semibold text-gray-800">
            {product.title}
          </h3>

          {/* Rating */}
          <div className="flex items-center text-yellow-400 text-sm">
            {"★".repeat(product.rating)}
            <span className="text-gray-300">
              {"★".repeat(5 - product.rating)}
            </span>
            <span className="ml-2 text-gray-500 text-xs">
              ({product.rating}.0)
            </span>
          </div>

          {/* Price */}
          <p className="text-blue-600 font-bold text-lg">
            {product.price}
          </p>

          {/* Button */}
          <button className="w-full mt-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    ))}

  </div>
</section>

       {/* Best Sellers Section */}
    <BestSellers />
    {/* New Arrivals Section */}
    <NewArrivals />
    {/* Footer Section */}
    <Footer />
    </div>
   

    
  );
}

import HeroSlider from "../components/Silder.jsx";
import ShopByCategory from "../components/ShopByCategory.jsx";
import BestSellers from "../components/BestSellers.jsx";
import NewArrivals from "../components/NewArrivals.jsx";

export default function Home() {
  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider />
      {/* shopbycategory */}
      <ShopByCategory />

      {/* Featured Section */}
      <section className="max-w-7xl mx-auto mt-12 px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow rounded-lg p-4">
            <img
              src="/images/product1.jpg"
              alt="Product 1"
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-2 font-semibold">Product 1</h3>
            <p className="text-blue-600 font-bold">$29.99</p>
          </div>

          <div className="bg-white shadow rounded-lg p-4">
            <img
              src="/images/product2.jpg"
              alt="Product 2"
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-2 font-semibold">Product 2</h3>
            <p className="text-blue-600 font-bold">$39.99</p>
          </div>

          <div className="bg-white shadow rounded-lg p-4">
            <img
              src="/images/product3.jpg"
              alt="Product 3"
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-2 font-semibold">Product 3</h3>
            <p className="text-blue-600 font-bold">$19.99</p>
          </div>

          <div className="bg-white shadow rounded-lg p-4">
            <img
              src="/images/product4.jpg"
              alt="Product 4"
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-2 font-semibold">Product 4</h3>
            <p className="text-blue-600 font-bold">$49.99</p>
          </div>
        </div>
      </section>
       {/* Best Sellers Section */}
    <BestSellers />
    {/* New Arrivals Section */}
    <NewArrivals />
    </div>
   

    
  );
}

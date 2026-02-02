"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { FiEdit, FiTrash2 } from "react-icons/fi";

export default function AdminPage() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imageURL, setImageURL] = useState("");
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch products
  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("product")
      .select("*")
      .order("id", { ascending: false });
    if (error) console.log(error);
    else setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Preview image when selected
  useEffect(() => {
    if (imageFile) {
      const objectUrl = URL.createObjectURL(imageFile);
      setPreview(objectUrl);

      // Clean up
      return () => URL.revokeObjectURL(objectUrl);
    } else if (imageURL) {
      setPreview(imageURL);
    } else {
      setPreview(null);
    }
  }, [imageFile, imageURL]);

  // Add product
  const addProduct = async (e) => {
    e.preventDefault();
    setLoading(true);

    let finalImage = "";

    if (imageFile) {
      // Upload to Supabase Storage (example bucket "product-images")
      const fileExt = imageFile.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const { data, error: uploadError } = await supabase.storage
        .from("product-images")
        .upload(fileName, imageFile);

      if (uploadError) {
        alert(uploadError.message);
        setLoading(false);
        return;
      }

      const { publicUrl } = supabase.storage
        .from("product-images")
        .getPublicUrl(fileName);
      finalImage = publicUrl;
    } else {
      finalImage = imageURL;
    }

    const { error } = await supabase.from("product").insert([
      { name, price: Number(price), description, image: finalImage },
    ]);

    if (error) alert(error.message);
    else {
      alert("Product Added Successfully ✅");
      setName("");
      setPrice("");
      setDescription("");
      setImageFile(null);
      setImageURL("");
      setPreview(null);
      fetchProducts();
    }

    setLoading(false);
  };

  // Delete product
  const deleteProduct = async (id) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    const { error } = await supabase.from("product").delete().eq("id", id);
    if (error) alert(error.message);
    else fetchProducts();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Admin Dashboard – Products
      </h1>

      {/* Add Product Form */}
      <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700">
          Add New Product
        </h2>
        <form className="space-y-4" onSubmit={addProduct}>
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none transition"
          />
          <input
            type="number"
            placeholder="Price (Rs)"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none transition"
          />
          <textarea
            placeholder="Description"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none transition resize-none"
          />

          {/* Image Inputs */}
          <div className="flex flex-col gap-2">
            <label className="font-medium text-gray-700">Upload Image File:</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setImageFile(e.target.files[0]);
                setImageURL("");
              }}
              className="border border-gray-300 rounded-xl px-4 py-2"
            />

            <label className="font-medium text-gray-700 mt-2">Or Image URL:</label>
            <input
              type="text"
              placeholder="Paste image URL"
              value={imageURL}
              onChange={(e) => {
                setImageURL(e.target.value);
                setImageFile(null);
              }}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-400 outline-none transition"
            />
          </div>

          {/* Preview */}
          {preview && (
            <div className="mt-4">
              <p className="text-gray-600 mb-2">Preview:</p>
              <img
                src={preview}
                alt="Preview"
                className="h-40 w-full object-cover rounded-lg shadow-lg"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:scale-[1.03] transition shadow-lg hover:shadow-2xl mt-4"
          >
            {loading ? "Adding..." : "Add Product"}
          </button>
        </form>
      </div>

      {/* Products Table */}
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-blue-50">
            <tr>
              <th className="px-6 py-4 text-gray-700 font-medium">#</th>
              <th className="px-6 py-4 text-gray-700 font-medium">Image</th>
              <th className="px-6 py-4 text-gray-700 font-medium">Name</th>
              <th className="px-6 py-4 text-gray-700 font-medium">Description</th>
              <th className="px-6 py-4 text-gray-700 font-medium">Price (Rs)</th>
              <th className="px-6 py-4 text-gray-700 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">
                  No products added yet
                </td>
              </tr>
            ) : (
              products.map((product, index) => (
                <tr key={product.id} className="border-t hover:bg-gray-50 transition">
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-16 w-16 object-cover rounded-lg"
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold">{product.name}</td>
                  <td className="px-6 py-4 text-gray-600">{product.description}</td>
                  <td className="px-6 py-4 text-blue-600 font-bold">{product.price}</td>
                  <td className="px-6 py-4 flex gap-3">
                    <button
                      onClick={() => alert("Edit feature coming soon!")}
                      className="flex items-center gap-1 px-3 py-1 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition"
                    >
                      <FiEdit /> Edit
                    </button>
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="flex items-center gap-1 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                    >
                      <FiTrash2 /> Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

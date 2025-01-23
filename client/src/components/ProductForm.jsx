import React, { useState } from "react"
import axios from "axios"
import useUserStore from "../zustand/user.js" 

const ProductForm = () => {
  const [product, setProduct] = useState({
    productId: "",
    name: "",
    price: "",
    featured: false,
    rating: "",
    company: "",
  })
  const { user } = useUserStore()

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!user){
      alert("Please login to add product")
      window.location.href = "/login"
      return;
    }

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/products`, product, { withCredentials: true })
      alert("Product added successfully")
      setProduct({
        productId: "",
        name: "",
        price: "",
        featured: false,
        rating: "",
        company: "",
      })
      window.location.reload();
      window.location.href = "/";
    } catch (error) {
      alert("Error adding product")
      // window.location.href = "/signup"
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productId">
          Product ID
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="productId"
          type="text"
          name="productId"
          value={product.productId}
          onChange={handleChange}
          placeholder="Product ID"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
          Price
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="price"
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
          required
        />
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input type="checkbox" name="featured" checked={product.featured} onChange={handleChange} className="mr-2" />
          <span className="text-gray-700 text-sm font-bold">Featured</span>
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
          Rating
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="rating"
          type="number"
          name="rating"
          value={product.rating}
          onChange={handleChange}
          placeholder="Rating"
          min="0"
          max="5"
          step="0.1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">
          Company
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="company"
          type="text"
          name="company"
          value={product.company}
          onChange={handleChange}
          placeholder="Company"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="hover:cursor-pointer bg-gray-900 text-white/80 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add Product
        </button>
      </div>
    </form>
  )
}

export default ProductForm


import React, { useState, useEffect } from "react"
import axios from "axios"

const ProductList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/products`, { withCredentials: true })
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products?.map((product) => (
          <div key={product._id} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
            <p className="text-gray-600 mb-2">Rating: {product.rating}</p>
            <p className="text-gray-600 mb-2">Company: {product.company}</p>
            {product.featured && (
              <span className="bg-secondary text-primary px-2 py-1 rounded-full text-sm font-semibold">Featured</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList


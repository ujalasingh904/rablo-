import React from "react"
import ProductList from "../components/ProductList"

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Welcome to our Product Store</h1>
      <ProductList />
    </div>
  )
}

export default HomePage


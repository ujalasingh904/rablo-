import React from "react"
import ProductForm from "../components/ProductForm"
import ProductList from "../components/ProductList"

const ProductPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Products</h1>
      <ProductForm />
      {/* <div className="mt-12">
        <ProductList />
      </div> */}
    </div>
  )
}

export default ProductPage


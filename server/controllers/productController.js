import Product from "../models/Product.js"

// add a product
export const addProduct = async (req, res) => {
  try {
    const product = new Product(req.body)
    const savedProduct = await product.save()
    res.status(201).json(savedProduct)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Get all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Update a product
export const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" })
    }
    res.json(updatedProduct)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Delete a product
export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id)
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" })
    }
    res.json({ message: "Product deleted successfully" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Fetch featured products
export const getFeaturedProducts = async (req, res) => {
  try {
    const featuredProducts = await Product.find({ featured: true })
    res.json(featuredProducts)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Fetch products with price less than a certain value
export const getProductsByPrice = async (req, res) => {
  try {
    const { price } = req.params
    const products = await Product.find({ price: { $lt: Number.parseFloat(price) } })
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Fetch products with rating higher than a certain value
export const getProductsByRating = async (req, res) => {
  try {
    const { rating } = req.params
    const products = await Product.find({ rating: { $gt: Number.parseFloat(rating) } })
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}


import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: [true, "Product ID is required"],
    unique: true,
    trim: true,
  },
  name: {
    type: String,
    required: [true, "Product name is required"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price must be a positive number"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    min: [0, "Rating must be between 0 and 5"],
    max: [5, "Rating must be between 0 and 5"],
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  company: {
    type: String,
    required: [true, "Company name is required"],
    trim: true,
  },
},{timestamps: true})

const Product = mongoose.model("Product", productSchema)

export default Product


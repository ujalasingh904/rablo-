import express from "express"
import { protect } from "../middleware/authMiddleware.js"
import {
  addProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getFeaturedProducts,
  getProductsByPrice,
  getProductsByRating,
} from "../controllers/productController.js"

const router = express.Router()

router.post("/", protect, addProduct) 
router.get("/", getAllProducts)
router.put("/:id", protect, updateProduct)
router.delete("/:id", protect, deleteProduct)
router.get("/featured", getFeaturedProducts)
router.get("/price/:price", getProductsByPrice)
router.get("/rating/:rating", getProductsByRating)

export default router


import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js"
import productRoutes from "./routes/productRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import cookieParser from "cookie-parser"

dotenv.config()

connectDB()

const app = express()

app.use(cors(
    {
        origin: process.env.CLIENT_URL,
        credentials: true
    }
))
app.use(express.json())
app.use(cookieParser())


app.use("/api/users", userRoutes)
app.use("/api/products", productRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port ${PORT}`))


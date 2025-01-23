import React from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage.jsx"
import useUserStore from "./zustand/user.js" 

function App() {
  const { user } = useUserStore()
  console.log("user from app.jsx", user)
  return (
    <div className="flex flex-col min-h-screen"> 
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} /> 
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App


import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className=" text-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-between items-center">
          <li>
            <Link to="/" className="text-xl font-bold">
              ProductStore
            </Link>
          </li>
          <div className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-secondary">
                Products
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-secondary">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="hover:text-secondary">
                Signup
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default Header


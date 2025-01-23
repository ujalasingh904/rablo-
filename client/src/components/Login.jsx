import React, { useState } from "react"
import axios from "axios"
import useUserStore from "../zustand/user.js"

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  const { setUser } = useUserStore()

  const handleChange = (e) => {
    const { name, value } = e.target
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(credentials)
    try {
      const { data: res } = await axios.post(`${import.meta.env.VITE_API_URL}/api/users/login`, credentials, { withCredentials: true })
      setUser(res)
      sessionStorage.setItem('user', JSON.stringify(res));
      alert("Logged in successfully")
      window.location.href = "/";
    } catch (error) {
      alert("error logging in", error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="hover:cursor-pointer bg-gray-900 text-white/80 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign In
        </button>
      </div>
    </form>
  )
}

export default Login


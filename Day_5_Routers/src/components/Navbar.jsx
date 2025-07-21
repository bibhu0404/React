import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-slate-800 text-white px-6 py-4 shadow-md">
      <ul className="flex gap-8">
        <Link to = "/"><li className="cursor-pointer hover:text-sky-400 transition duration-300">Home</li></Link> 
        <Link to = "/about"><li className="cursor-pointer hover:text-sky-400 transition duration-300">About</li></Link> 
        <Link to = "/contact"><li className="cursor-pointer hover:text-sky-400 transition duration-300">Contact</li></Link> 
      </ul>
      <button className="bg-sky-400 hover:bg-sky-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
        Get Started
      </button>
    </nav>
  )
}

export default Navbar

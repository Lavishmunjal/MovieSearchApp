import React from 'react'
import { CiSearch } from "react-icons/ci"

const Navbar = ({ searchMovie, setSearchMovie, fetchMovieData }) => {



  return (
    <div className="flex justify-between lg:flex md:flex flex-wrap items-center px-6 py-3 bg-gray-800 text-white shadow-md">
      
      {/* Logo / Title */}
      <div className="text-xl font-semibold tracking-wide">
        🎬 Movie Searching App
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-2 bg-gray-700 px-3 py-2 rounded-full">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchMovie}
            onChange={(e) => setSearchMovie(e.target.value)}
          className="bg-transparent outline-none text-white placeholder-gray-300 
                     w-64 text-sm"
        />
        <CiSearch onClick={fetchMovieData} className="w-5 h-5 cursor-pointer hover:text-amber-400 transition" />
      </div>

    </div>
  )
}

export default Navbar

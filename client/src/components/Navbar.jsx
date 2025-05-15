import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo or Brand */}
          <Link to='/' className="flex-shrink-0 text-xl font-bold text-gray-800 dark:text-white">
            X- Event Booking
          </Link>

          {/* Navigation Links (if needed) */}
          <div className="hidden md:flex space-x-4">
            <Link to='/'
              className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition"
            >
              Home
            </Link>
            <Link to='/'
              className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition"
            >
              About
            </Link>
            <Link to='/'
              className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition"
            >
              Contact
            </Link>
          </div>

          {/* Admin Login Button */}
          <div className="flex items-center">
            <button onClick={()=>{ navigate('/adminLogin')}} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition shadow-md">
              Admin Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

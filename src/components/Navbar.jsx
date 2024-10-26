import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 flex justify-between items-center p-6 shadow-lg relative">
      <div className="text-yellow-500 text-3xl font-bold">
        {/* Replace with your logo */}
        T
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <div className={`absolute top-full left-0 w-full bg-gray-800 md:static md:flex md:justify-center md:space-x-8 transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
        <Link
          to="/"
          className="text-white hover:text-yellow-400 transition duration-300 p-2 block md:inline-block"
          onClick={() => setIsOpen(false)} // Close menu on link click
        >
          Home
        </Link>
        <Link
          to="/projects"
          className="text-white hover:text-yellow-400 transition duration-300 p-2 block md:inline-block"
          onClick={() => setIsOpen(false)} // Close menu on link click
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className="text-white hover:text-yellow-400 transition duration-300 p-2 block md:inline-block"
          onClick={() => setIsOpen(false)} // Close menu on link click
        >
          Contact
        </Link>
      </div>

      {/* Search Input on Desktop */}
      <div className="relative hidden md:block">
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-700 px-4 py-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
    </nav>
  );
};

export default Navbar;

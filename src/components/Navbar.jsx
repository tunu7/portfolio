import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 flex justify-between items-center p-6 shadow-lg">
      <div className="text-yellow-500 text-3xl font-bold">
        {/* Replace with your logo */}
        T
      </div>
      <div className="flex space-x-8">
        <Link to="/" className="text-white hover:text-yellow-400 transition duration-300">Home</Link>
        <Link to="/projects" className="text-white hover:text-yellow-400 transition duration-300">Projects</Link>
        <Link to="/contact" className="text-white hover:text-yellow-400 transition duration-300">Contact</Link>
      </div>
      <div className="relative">
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

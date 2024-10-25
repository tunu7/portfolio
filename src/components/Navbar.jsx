import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 shadow-lg">
      <ul className="flex space-x-8 justify-center">
        <li>
          <Link
            to="/"
            className="hover:text-gray-400 font-semibold transition duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="hover:text-gray-400 font-semibold transition duration-300"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="hover:text-gray-400 font-semibold transition duration-300"
          >
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

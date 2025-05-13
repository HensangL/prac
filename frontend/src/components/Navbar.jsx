import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-800 to-indigo-600 p-6 shadow-lg">
      <ul className="w-full flex justify-between items-center">
        <li>
          <Link
            to="/"
            className="text-white text-lg font-semibold p-2 rounded-2xl hover:bg-white hover:text-black"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-white text-lg font-semibold p-2 rounded-2xl hover:bg-white hover:text-black"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-white text-lg font-semibold p-2 rounded-2xl hover:bg-white hover:text-black"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

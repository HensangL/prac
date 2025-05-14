import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-100 p-6 shadow-lg bg-opacity-70">
      <ul className="flex justify-center gap-20 items-center">
        <li>
          <Link
            to="/"
            className="text-white text-lg font-semibold px-4 py-2 rounded-2xl hover:bg-white hover:text-indigo-900 transition-colors duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-white text-lg font-semibold px-4 py-2 rounded-2xl hover:bg-white hover:text-indigo-900 transition-colors duration-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-white text-lg font-semibold px-4 py-2 rounded-2xl hover:bg-white hover:text-indigo-900 transition-colors duration-300"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navbar, setNavbar] = useState(true);

  return (
    <div>
      <nav className="bg-gradient-to-r from-blue-800 to-indigo-600 p-4  shadow-lg">
        <ul className="w-full flex justify-between items-center">
          <li>
            <Link
              to="/"
              className="text-white text-lg font-semibold hover:text-pink-400 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white text-lg font-semibold hover:text-pink-400 transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white text-lg font-semibold hover:text-pink-400 transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

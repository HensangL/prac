import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navbar, setNavbar] = useState(true);

  return (
    <div>
      <nav className="bg-gradient-to-r from-blue-800 to-indigo-600 p-7  shadow-lg">
        <ul className="w-full flex justify-between items-center">
          <li>
            <Link
              to="/"
              className= " ml-1 text-white text-lg font-semibold hover:text-blackb hover:bg-white hover:rounded-2xl  hover:p-1 hover:text-black "
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white text-lg font-semibold  hover:text-blackb hover:bg-white hover:rounded-2xl  hover:p-1 hover:text-black"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white text-lg font-semibold hover:text-blackb hover:bg-white hover:rounded-2xl  hover:p-1 hover:text-black"
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

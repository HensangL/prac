import React, { useState } from 'react';
import logo from '../image/layout.png';
import facebook from '../image/facebook.png';
import instagram from '../image/instagram.png';
import twitter from '../image/twitter.png';
import Maincontent from '../Maincontent';
import Recent from '../Recent';

function Home() {
  const [recent, setRecent] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        style={{
          background: 'linear-gradient(45deg, #333, #f43f5e, #7e22ce, #4338ca)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 10s ease infinite',
        }}
        className="border-2 w-[600px] rounded-3xl h-auto flex flex-col"
      >
        <style>
          {`
            @keyframes gradientShift {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }
          `}
        </style>

        {/* Navbar */}
        <nav className="bg-white/20 p-2 rounded-t-3xl backdrop-blur-lg">
          <ul className="flex gap-10 items-center">
            <li>
              <img
                src={logo}
                className="w-10 cursor-pointer"
                alt="Logo"
                onClick={() => setRecent(false)} // Reset to Maincontent when logo is clicked
              />
            </li>
            <li className="mt-2 text-white font-semibold hover:text-pink-400 transition-colors duration-300 cursor-pointer">
              <button onClick={() => setRecent(true)}>Recent works</button>
            </li>
            <li className="mt-2 text-white font-semibold hover:text-pink-400 transition-colors duration-300 cursor-pointer">
              Qualifications
            </li>
          </ul>
        </nav>

        {/* Main content box */}
        <div className="bg-white/10 m-4 p-4 rounded-xl overflow-y-auto h-80 w-[90%] mx-auto backdrop-blur-md text-white">
          {recent ? <Recent /> : <Maincontent />}
        </div>

        {/* Footer */}
        <footer className="bg-[#7532b4] text-center py-2 rounded-b-3xl text-sm text-gray-200">
          <div className="flex justify-center gap-10">
            <a href="#"><img src={facebook} className="w-10 rounded-full border-2 border-fuchsia-100" /></a>
            <a href="#"><img src={instagram} className="w-10 rounded-full border-2 border-fuchsia-100" /></a>
            <a href="#"><img src={twitter} className="w-10 rounded-full border-2 border-fuchsia-100" /></a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;

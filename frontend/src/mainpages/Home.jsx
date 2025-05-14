import React, { useState } from 'react';
import logo from '../image/layout.png';
import facebook from '../image/facebook.png';
import instagram from '../image/instagram.png';
import twitter from '../image/twitter.png';
import Maincontent from '../Maincontent';
import Recent from '../Recent';
import Qualification from '../Qualification';
import background from '../image/back.jpg';

function HomePage() {
  const [activesection, setactivesection] = useState('main');

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className="border-2 w-[600px] rounded-3xl h-auto flex flex-col bg-no-repeat bg-center bg-cover bg-fixed"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* Navbar */}
        <nav className="bg-white/20 p-2 rounded-t-3xl backdrop-blur-lg">
          <ul className="flex flex-col md:flex-row md:gap-40 gap-4 items-center justify-center">
            <li>
              <img
                src={logo}
                className="w-10 cursor-pointer"
                alt="Logo"
                onClick={() => setactivesection('main')}
              />
            </li>
            <li className="text-white font-semibold hover:text-black transition-colors duration-300 cursor-pointer">
              <button onClick={() => setactivesection('recent')}>
                Recent works
              </button>
            </li>
            <li className="text-white font-semibold hover:text-black transition-colors duration-300 cursor-pointer">
              <button onClick={() => setactivesection('qualification')}>
                Qualifications
              </button>
            </li>
          </ul>
        </nav>

        {/* Main content box */}
        <div className="m-4 rounded-xl overflow-y-auto h-80 w-[90%] mx-auto text-white transition-opacity duration-500">
          {activesection === 'recent' && <Recent />}
          {activesection === 'qualification' && <Qualification />}
          {activesection === 'main' && <Maincontent />}
        </div>

        {/* Footer */}
        <footer className="bg-[#7532b4] text-center py-2 rounded-b-3xl text-sm text-gray-200">
          <div className="flex justify-center gap-10">
            <a href="https://www.facebook.com/hensang.lama" aria-label="Facebook Profile">
              <img
                src={facebook}
                className="w-10 rounded-full border-2 border-fuchsia-100"
                alt="Facebook"
              />
            </a>
            <a href="https://www.instagram.com/hensanglama/" aria-label="Instagram Profile">
              <img
                src={instagram}
                className="w-10 rounded-full border-2 border-fuchsia-100"
                alt="Instagram"
              />
            </a>
            <a href="https://x.com/HensangL" aria-label="Twitter Profile">
              <img
                src={twitter}
                className="w-10 rounded-full border-2 border-fuchsia-100"
                alt="Twitter"
              />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default HomePage;

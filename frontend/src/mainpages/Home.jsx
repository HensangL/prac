import React, { useState } from 'react';
import logo from '../image/layout.png';
import facebook from '../image/facebook.png';
import instagram from '../image/instagram.png';
import twitter from '../image/twitter.png';
import Maincontent from '../Maincontent';
import Recent from '../Recent';
import Qualification from '../Qualification'; // Assuming you have this component
import background from '../image/back.jpg'; // Your background image

function Home() {
  const [activesection, setactivesection] = useState('main'); // Default to 'main'

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
      style={{
            background: ` url(${background})`, // Blend the gradient and the image
            backgroundSize: '100% 100%', // This will stretch the background image to fill the space
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat', // Ensures the image doesn't repeat
          
         
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
          <ul className="flex gap-40 items-center">
            <li>
              <img
                src={logo}
                className="w-10 cursor-pointer"
                alt="Logo"
                onClick={() => setactivesection('main')} // Reset to Maincontent when logo is clicked
              />
            </li>
            <li className="mt-2 text-white font-semibold hover:text-black hover:pointer-coarse: transition-colors duration-300 cursor-pointer">
              <button onClick={() => setactivesection('recent')}>Recent works</button>
            </li>
            <li className="mt-2 text-white font-semibold hover:text-black hover:pointer-coarse: transition-colors duration-300 cursor-pointer">
              <button onClick={() => setactivesection('qualification')}>Qualifications</button>
            </li>
          </ul>
        </nav>

        {/* Main content box */}
        <div
          className="m-4 rounded-xl overflow-y-auto h-80 w-[90%] mx-auto  text-white"
          
        >
          {activesection === 'recent' && <Recent />}
          {activesection === 'qualification' && <Qualification />}
          {activesection === 'main' && <Maincontent />}
        </div>

        {/* Footer */}
        <footer className="bg-[#7532b4] text-center py-2 rounded-b-3xl text-sm text-gray-200">
          <div className="flex justify-center gap-10">
            <a href="https://www.facebook.com/hensang.lama">
              <img src={facebook} className="w-10 rounded-full border-2 border-fuchsia-100" />
            </a>
            <a href="https://www.instagram.com/hensanglama/">
              <img src={instagram} className="w-10 rounded-full border-2 border-fuchsia-100" />
            </a>
            <a href="https://x.com/HensangL">
              <img src={twitter} className="w-10 rounded-full border-2 border-fuchsia-100" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;

import React from 'react';
import logo from '../image/layout.png';

function Home() {
  return (
    <div className="flex items-center justify-center mt-30 w-full h-screen">
      <div
        style={{
          background: 'linear-gradient(45deg, #333, #f43f5e, #7e22ce, #4338ca)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 10s ease infinite',
        }}
        className="border-2 w-150 rounded-3xl h-auto flex flex-col"
      >
        <style>
          {`
            @keyframes gradientShift {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }
          `}
        </style>

        {/* Navbar with Transparent Background */}
<nav className="bg-white/20 p-2 rounded-t-3xl backdrop-blur-lg">
          <ul className="flex gap-30 items-center">
            <li><img src={logo} className="w-10" alt="Logo" /></li>
            <li className="mt-2 text-white font-semibold hover:text-pink-400 transition-colors duration-300">Recent works</li>
            <li className="mt-2 text-white font-semibold hover:text-pink-400 transition-colors duration-300">Qualifications</li>
          </ul>
        </nav>

        {/* Main content */}
        <div className="w-full h-80 flex flex-col  justify-center  text-white">
          <p className="text-5xl font-bold text-[#342339] mr-5">ELEVATE YOUR WEBSITES, IMPROVE YOUR EXPERIENCE</p>
          <p className="font-mono text-[#ffffff]">Upgrade your website game</p>
        </div>

        {/* Footer */}
        <footer className="bg-gray-200 text-center py-2 rounded-b-3xl text-sm text-gray-600">
          © 2025 Your App
        </footer>
      </div>
    </div>
  );
}

export default Home;

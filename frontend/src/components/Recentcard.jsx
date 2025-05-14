import React from 'react';

const Recentcard = ({ pic, heading, description, link }) => {
  return (
    <div className="w-48 bg-gradient-to-br from-[#8E7DBE] to-[#FF2DF1] rounded-2xl p-2 shadow-lg text-black font-sans transition-transform duration-300 hover:scale-105">
      <div className="flex flex-col items-center ">
        <img
          src={pic}
          alt={heading}
          className="rounded-2xl w-24 h-24 object-cover mb-3 border-2 border-black/20 shadow-md"
        />
        <h1 className="text-lg font-semibold font-serif text-[#2D0031] mb-1 tracking-wide">
          {heading}
        </h1>
        {description && (
          <p className="text-xs text-gray-700 mb-2 px-1">
            {description}
          </p>
        )}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline text-xs hover:text-blue-800 transition"
          >
            Learn More
          </a>
        )}
      </div>
    </div>
  );
};

export default Recentcard;

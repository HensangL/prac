import React, { useState } from 'react'
import pfp from '../image/ichigo.jpg'
import education from '../image/education.png'
import bbg from '../image/bbg.jpg'
function About() {
  const [popupType, setPopupType] = useState(null); // 'email', 'phone', 'github'

  return (
    <div className='py-20'
    style={{ backgroundImage: `url(${bbg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      {/* Profile and Intro */}
      <div className=' flex items-center justify-center'>
        <img src={pfp} className='w-60 h-60 border-4 border-[#FFFA8D] rounded-full' />
        <div className='border-r-2 rounded-3xl p-6 border-[#6FE6FC]'>
          <h1 className='text-4xl font-serif font-bold text-[#4ED7F1]'>Hello!</h1>
          <p className='mt-4 font-light text-lg text-[#183B4E]'>
            I'm Hensang Lama, a creative and detail-driven web designer with a passion <br />
            for crafting beautiful, user-focused digital experiences. I specialize in designing <br />
            modern, responsive websites that not only look great but also provide seamless <br />
            functionality across all devices. With a strong eye for aesthetics and a focus on <br />
            usability, I transform ideas into engaging online experiences. Explore my work <br />
            below to see how design can make a lasting impact!
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className='items-center justify-center flex flex-col mt-20'>
        <h1 className='text-[#326670] text-2xl font-medium'>Let's talk!</h1>

        <ul className='flex gap-52 mt-9'>

          {/* EMAIL */}
          <li className="relative">
            <h2 className='font-medium font-mono bg-[#432b2c] text-center p-2 w-40 rounded-2xl text-white relative'>
              <button className='animate-pulse'
                onMouseEnter={() => setPopupType('email')}
                onMouseLeave={() => setPopupType(null)}
              >
                EMAIL
              </button>
              {popupType === 'email' && (
                <div className="absolute -top-10 right-0 bg-[#24292E] text-white text-sm px-3 py-1 rounded-lg shadow-md z-10">
                  lamahensang100@gmail.com
                </div>
              )}
            </h2>
          </li>

          {/* PHONE */}
          <li className="relative">
            <h2 className='font-medium font-mono bg-[#432b2c] text-center p-2 w-40 rounded-2xl text-white relative'>
              <button className='animate-pulse'
                onMouseEnter={() => setPopupType('phone')}
                onMouseLeave={() => setPopupType(null)}
              >
                PHONE
              </button>
              {popupType === 'phone' && (
                <div className="absolute -top-10 right-0 bg-[#24292E] text-white text-sm px-3 py-1 rounded-lg shadow-md z-10">
                  +977-9876543210
                </div>
              )}
            </h2>
          </li>

          {/* GITHUB */}
          <li className="relative">
            <h2 className='font-medium font-mono bg-[#432b2c] text-center p-2 w-40 rounded-2xl text-white relative'>
              <button className='animate-pulse'
                onMouseEnter={() => setPopupType('github')}
                onMouseLeave={() => setPopupType(null)}
              >
                GITHUB
              </button>
              {popupType === 'github' && (
                <div className="absolute -top-10 right-0 bg-[#24292E] text-white text-sm px-3 py-1 rounded-lg shadow-md z-10">
                  github.com/hensangL
                </div>
              )}
            </h2>
          </li>

          {/* LINKEDIN */}
          <li className="relative">
            <h2 className='font-medium font-mono bg-[#432b2c] text-center p-2 w-40 rounded-2xl text-white relative'>
              <button className='animate-pulse'
                onMouseEnter={() => setPopupType('Linkedin')}
                onMouseLeave={() => setPopupType(null)}
              >
                Linkedin
              </button>
              {popupType === 'Linkedin' && (
                <div className="absolute -top-10 right-0 bg-[#24292E] text-white text-sm px-3 py-1 rounded-lg shadow-md z-10">
                  Linkedin.com/hensangL
                </div>
              )}
            </h2>
          </li>
          

        </ul>
      </div>
<div className="mt-10 ml-125 w-175 px-4 p-10 bg-[#ffff00] rounded-2xl flex flex-col md:flex-row gap-5 shadow-2xl shadow-black/30">
  {/* Left Side: Education Details */}
  <div className="flex flex-col flex-grow">
    <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#15194a] text-center mb-6">
      EDUCATION
    </h1>

    {/* Tribeni */}
    <div className="flex justify-between items-start gap-4 mb-3 flex-wrap">
      <div className="text-[#1219aa] text-lg">
        <h2 className="text-xl font-semibold font-mono">Tribeni Higher Secondary School</h2>
        <p className="text-md font-mono">SLC</p>
      </div>
      <p className="text-lg font-mono">2073–2075</p>
    </div>

    {/* Vishwa Adarsha */}
    <div className="flex justify-between items-start gap-4 mb-3 flex-wrap">
      <div className="text-[#1219aa] text-lg">
        <h2 className="text-xl font-semibold font-mono">Vishwa Adarsha College</h2>
        <p className="text-md font-mono">+2</p>
      </div>
      <p className="text-lg font-mono">2075–2077</p>
    </div>

    {/* Central Campus */}
    <div className="flex justify-between items-start gap-4 flex-wrap">
      <div className="text-[#1219aa] text-lg">
        <h2 className="text-xl font-semibold font-mono">Central Campus of Technology</h2>
        <p className="text-md font-mono">Bachelor in Information Technology</p>
      </div>
      <p className="text-lg font-mono">2077–</p>
    </div>
  </div>

  {/* Right Side: Image */}
  <img
    src={education}
    alt="Education Illustration"
    className="w-36  h-40 mt-20 rotate-[15deg]"
  />
</div>


    </div>
  )
}

export default About

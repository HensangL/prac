import React, { useState } from 'react'
import pfp from '../image/ichigo.jpg'

function About() {
  const [popupType, setPopupType] = useState(null); // 'email', 'phone', 'github'

  return (
    <div>
      {/* Profile and Intro */}
      <div className='mt-32 flex items-center justify-center'>
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
      <div className='mt-10'>
      <h1 className='text-4xl font-serif font-bold text-[#15194a] text-center'>EDUCATION</h1>

      </div>
    </div>
  )
}

export default About

import React, { useState } from 'react'
import pfp from '../image/ichigo.jpg'
function About() {
  const [popup,setpopup]= useState(false);
  function show(){
    

  }

  return (
    <div >
      <div className='mt-20 flex items-center justify-center'>
        <img src={pfp} className='w-60 h-60 border-4 border-[#FFFA8D] rounded-full' />
        <div className='border-r-2 rounded-3xl p-6 border-[#6FE6FC] '>
        <p className='ml-25'><h1 className='text-4xl font-serif font-bold text-[#4ED7F1]'>Hello!</h1>
        <p className='mt-4 font-light text-lg text-[#183B4E]'>
        I'm [Your Name], a creative and detail-driven web designer with a passion <br /> for crafting beautiful, user-focused digital experiences. I specialize in designing <br /> modern, responsive websites that not only look great but also provide seamless <br /> functionality across all devices. With a strong eye for aesthetics and a focus on <br /> usability, I transform ideas into engaging online experiences. Explore my work <br /> below to see how design can make a lasting impact!
        </p></p>

</div>
      </div>
      <div className='items-center justify-center flex flex-col mt-20'>
        <h1 className='text-[#326670] text-2xl font-medium'>Let's talk!</h1>
        
          <ul className='flex gap-52 mt-9'>
            <li><h2 className='font-medium font-mono bg-[#432b2c] text-center p-2 w-40 align-middle rounded-2xl text-white'><button>EMAIL</button></h2> <br />lamahensang100@gmail.com</li>
            <li><h2 className='font-medium font-mono bg-[#432b2c] text-center p-2 w-40 align-middle rounded-2xl text-white'><button>PHONE</button> </h2></li>
            <li><h2 className='font-medium font-mono bg-[#432b2c] text-center p-2 w-40 align-middle rounded-2xl text-white'><button>GITHUB</button> </h2></li>
            <li><h2 className='font-medium font-mono bg-[#432b2c] text-center p-2 w-40 align-middle rounded-2xl text-white'><button>LINKEDIN</button> </h2></li>
          </ul>
        

        </div>
    </div>
  )
}

export default About
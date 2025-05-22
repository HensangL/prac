import React, { useState } from 'react'
import bbg from '../image/bbg.jpg'

function Contact() {
      const [showform,setshowform]=useState(false)


  return (
   <div
         style={{ backgroundImage: `url(${bbg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
       className="  justify-center min-h-screen bg-gray-100">
        <button className='border-2 border-amber-50 p-4 rounded-3xl bg-blue-300 font-light text-blue-950 hover:scale-105 hover:cursor-pointer' onClick={()=> setshowform(!showform)}

> Press me

</button>
        {
          showform && (
            <div className='ml-160 items-center justify-center flex border-2 w-100 border-white rounded-4xl p-9'>
          <form action="get">
            <p className='p-2 font-medium text-cyan-950'>Your name:</p>            <input type="text" name="Username" className='p-3' placeholder='Enter your name'  />
            <p className='p-2 font-medium text-cyan-950'>Phone number:</p>            <input type="text" name="Username" className='p-3' placeholder='Enter your Phone'  />
            <p className='p-2 font-medium text-cyan-950'>Your Message:</p>            <input type="text" name="Username" className='p-3 h-23 rounded-3xl' placeholder='Enter your Message'  />
            <br />
                        <button type='' className='p-3  font-medium text-cyan-950 bg-cyan-500 rounded-4xl w-40 hover:scale-105 hover:cursor-pointer'>Submit</button>


          </form>    
          </div>        
          )
        }

       </div>
  )
}

export default Contact
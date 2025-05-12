import React from 'react'
import { Route ,Routes } from 'react-router-dom'
import Home from './mainpages/Home'
import About from './mainpages/About'
import Contact from './mainpages/Contact'

function Approutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>

            <Route path="/contact" element={<Contact/>}/>

        </Routes>
        
    </div>
  )
}

export default Approutes
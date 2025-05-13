import React from 'react'
import { Route ,Routes } from 'react-router-dom'
import Home from './mainpages/Home'
import About from './mainpages/About'
import Contact from './mainpages/Contact'
import Maincontent from './Maincontent'
import Recent from './Recent'

function Approutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>

            <Route path="/contact" element={<Contact/>}/>
            <Route path="/maincontent"element={<Maincontent/>}/>
            <Route path="/recent" element={<Recent/>}/>
        </Routes>
        
    </div>
  )
}

export default Approutes
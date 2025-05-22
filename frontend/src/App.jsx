import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Approutes from './Approutes';
import { useLocation } from 'react-router-dom';

function App() {

 

  return (
    <>
      <Navbar />{/* Render Navbar based on state */}
      <Approutes />
      
    </>
  );
}

export default App;

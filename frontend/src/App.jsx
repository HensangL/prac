import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Approutes from './Approutes';
import { useLocation } from 'react-router-dom';

function App() {
  const [shownavbar, setshownavbar] = useState(true);
  const location = useLocation();

  // Update the shownavbar state when the location changes
  useEffect(() => {
    if (location.pathname === '/contact') {
      setshownavbar(false); // Hide navbar on /contact route
    } else {
      setshownavbar(true); // Show navbar on other routes
    }
  }, [location]); // Dependency on location, triggers when location changes

  return (
    <>
      {shownavbar && <Navbar />} {/* Render Navbar based on state */}
      <Approutes />
      
    </>
  );
}

export default App;

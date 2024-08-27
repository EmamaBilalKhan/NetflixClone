import React, { useState, useEffect } from 'react';
import './TopBar.css';
import netflixlogo from './assets/netflixlogo.png';

function TopBar() {
  const [show, handleshow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleshow(true);
      } else handleshow(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); 
    };
  }, []);

  return (
    <div className={`bar ${show && 'bar_black'}`}>
      <img
        src={netflixlogo}
        alt="Netflix Logo"
        className="netflix_logo"
      />
      <img
        className="avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt="Profile"
      />
    </div>
  );
}

export default TopBar;

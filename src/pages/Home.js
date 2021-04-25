import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import Navbar from '../components/Navbar';

const Home = () => {
  const [click, setClick] = useState(false);
  const handleToggle = () => {
    setClick(!click);
  };
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && click) {
        setClick(false);
      }
    };
    window.addEventListener('resize', hideMenu);
    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });
  return (
    <>
      <Navbar handleToggle={handleToggle} />
      <Menu click={click} handleToggle={handleToggle} />
      <Hero />
      <Footer />
    </>
  );
};

export default Home;

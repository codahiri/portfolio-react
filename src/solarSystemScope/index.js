import React from 'react';
import NavSec from '../home/NavSec';
import Footer from '../footer/Footer';
import Slide from 'react-reveal/Slide';

const SolarSystemScope = () => {
  return (
    <>
      <Slide top duration={1000}>
        <NavSec />
      </Slide>
      <iframe 
        title='Solar System Scope'
        src="https://www.solarsystemscope.com/iframe" 
        style={{
        width:'100%',
        height: '100vh',
        border: '2px solid #0f5c6e',
      }}>
      </iframe>
      <Slide bottom duration={1000}>
        <Footer />
      </Slide>
    </>
  )
}

export default SolarSystemScope
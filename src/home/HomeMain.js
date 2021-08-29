import React from 'react';
import NavSec from './NavSec';
import Reveal from 'react-reveal/Reveal';
import AboutInfo from './AboutInfo';

const HomeMain = () => {
  return (
    <>
      <Reveal effect='animNav'>
        <NavSec />
      </Reveal>
      <AboutInfo />
    </>
  );
}

export default HomeMain;
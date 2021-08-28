import React from 'react';
import NavSec from './NavSec';
import Reveal from 'react-reveal/Reveal';

const HomeMain = () => {
  return (
    <>
      <Reveal effect='animNav'>
        <NavSec />
      </Reveal>
    </>
  );
}

export default HomeMain;
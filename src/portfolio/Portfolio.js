import React from 'react';
import NavSec from '../home/NavSec';
import Slide from 'react-reveal/Slide';
import PageInfo from './PageInfo';
import Projects from './Projects';
import Footer from '../footer/Footer';

function Portfolio() {
  return (
    <>
      <Slide top duration='1000'>
        <NavSec />
      </Slide>
      <Slide bottom duration='1000'>
        <PageInfo />
      </Slide>
      <Slide top duration='1000'>
        <Projects />
      </Slide>
      <Slide bottom duration='500'>
        <Footer />
      </Slide>
    </>
  );
}

export default Portfolio;
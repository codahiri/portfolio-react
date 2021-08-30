import React from 'react';
import NavSec from '../home/NavSec';
import Slide from 'react-reveal/Slide';

function SetUp() {
  return (
    <>
      <Slide top duration='1250'>
        <NavSec />
      </Slide>
    </>
  );
}

export default SetUp;
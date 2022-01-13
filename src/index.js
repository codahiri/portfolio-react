import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Routing from './Routing';
import Particle from './particles/Particles';

ReactDOM.render(
  <React.StrictMode>
    <Particle />
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);
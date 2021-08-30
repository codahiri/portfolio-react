import React from 'react';
import './styles/main.scss';
import './styles/animation.scss';
import HomeMain from './home/HomeMain';
import Portfolio from './portfolio/Portfolio';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function Routing() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={HomeMain} />
        <Route path='/portfolio' exact component={Portfolio} />
      </Switch>
    </Router>
  );
}

export default Routing;
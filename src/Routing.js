import React from 'react';
import './styles/main.scss';
import './styles/animation.scss';
import HomeMain from './home/HomeMain';
import Portfolio from './portfolio/Portfolio';
import SetUp from './setup/SetUp';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function Routing() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={HomeMain} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/setup' component={SetUp} />
      </Switch>
    </Router>
  );
}

export default Routing;
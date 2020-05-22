import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import '../node_modules/draft-js/dist/Draft.css';

import Administrative from './containers/Administrative/Administrative';
import Community from './containers/Community/Community';
import TechnicalContainer from './containers/Technical/Technical';
import SideNavigation from './components/navigation/SideNavigation';

import './App.css';

function App() {
  return (
    <MemoryRouter>
      <div className='help-center__container'>
        <SideNavigation />
        <Switch>
          <Route path="/" exact component={TechnicalContainer} />
          <Route path="/administrative" component={Administrative} />
          <Route path="/community" component={Community} />
          <Route path="/my" component={TechnicalContainer} />
          <Route path="/lesson" component={TechnicalContainer} />
          <Route path="/course" component={TechnicalContainer} />
          <Route path="/section" component={TechnicalContainer} />
        </Switch>
      </div>
    </MemoryRouter>
  );
}

export default App;

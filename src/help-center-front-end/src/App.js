import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import 'react-quill/dist/quill.snow.css';

import Administrative from './containers/Administrative/Administrative';
import Community from './containers/Community/Community';
import TechnicalContainer from './containers/Technical/Technical';
import SideNavigation from './components/navigation/SideNavigation';
import AddressBar from './components/Address-bar/AddressBar'

import './App.css';

function App() {
  return (
    <MemoryRouter>
      <div className='help-center__container'>
        <AddressBar />
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

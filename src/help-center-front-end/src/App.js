import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';

import Administrative from './containers/Administrative/Administrative';
import Community from './containers/Community/Community';
import My from './containers/Technical/My/My';
import Lesson from './containers/Technical/Lesson/Lesson';
import Course from './containers/Technical/Course/Course';
import Section from './containers/Technical/Section/Section';
import SideNavigation from './components/Navigation/SideNavigation';

import './App.css';

function App() {
  return (
    <MemoryRouter>
      <div className='help-center__container'>
        <SideNavigation />
        <Switch>
          <Route path="/" exact component={My} />
          <Route path="/administrative" component={Administrative} />
          <Route path="/community" component={Community} />
          <Route path="/my" component={My} />
          <Route path="/lesson" component={Lesson} />
          <Route path="/course" component={Course} />
          <Route path="/section" component={Section} />
        </Switch>
      </div>
    </MemoryRouter>
  );
}

export default App;

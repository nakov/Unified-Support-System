import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import styled from 'styled-components';

import './App.css';

import HelpCenter from './containers/HelpCenter/HelpCenter';
import Administrative from './containers/Administrative/Administrative';
import Community from './containers/Community/Community';
import My from './containers/Technical/My/My';
import Lesson from './containers/Technical/Lesson/Lesson';
import Course from './containers/Technical/Course/Course';
import Section from './containers/Technical/Section/Section';

import SideNavigation from './components/navigation/SideNavigation';

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  grid-gap: 2rem;
`

function App() {
  return (
    <MemoryRouter>
        <StyledContainer>
          <SideNavigation />
          <Switch>
            <Route path="/" exact component={HelpCenter} />
            <Route path="/administrative" component={Administrative} />
            <Route path="/community" component={Community} />
            <Route path="/my" component={My} />
            <Route path="/lesson" component={Lesson} />
            <Route path="/course" component={Course} />
            <Route path="/section" component={Section} />
          </Switch>
        </StyledContainer>
    </MemoryRouter>
  );
}

export default App;

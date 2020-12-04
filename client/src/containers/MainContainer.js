// Quiz logic, state here
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../screens/Landing/Landing';

const MainContainer = () => {
  // functional logic, state and store state
  return (
    <Switch>
      <Route path="/">
        <Landing />
      </Route>
    </Switch>
  )
}

export default MainContainer;
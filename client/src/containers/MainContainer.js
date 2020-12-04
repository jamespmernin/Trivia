// Quiz logic, state here
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../screens/Landing/Landing';
import Home from '../screens/Home/Home'

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
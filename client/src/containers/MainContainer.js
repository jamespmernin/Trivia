// Quiz logic, state here
import React from 'react';
import { Switch, Route } from 'react-router-dom';

const MainContainer = () => {
  // functional logic, state and store state
  return (
    < Switch >
      <Route path="/">
        <h1>Hello World</h1>
      </Route>
    </Switch >
  )
}

export default MainContainer;
import React from 'react';
import { NavLink, Route } from "react-router-dom";
import Home from '../Home/Home';
import './Signup.css';

const Signup = () => {
  /* User name and password both need to be confirmed to match before adding a user account */
  return (
    <div>
      <Route exact path="/signup">
        <div id="signup-main-container">
          <div id="signup-header-container">
            <h1 id="signup-header">Sign Up!</h1>
          </div>
          <div id="credentials-box">
            <div id="signup-username-box">
              <label htmlFor="username">Username:</label>
              <input
                type="username"
                id="signup-username"
                placeholder="Username"
                required
                autoFocus
              />
            </div>
            <div id="signup-username-confirm-box">
              <label htmlFor="username-confirm">Confirm Username:</label>
              <input
                type="username-confirm"
                id="signup-username-confirm"
                placeholder="Confirm Username"
                required
              />
            </div>
            <div id="signup-password-box">
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <div id="signup-password-confirm-box">
              <label htmlFor="password-confirm">Confirm Password:</label>
              <input
                id="password-confirm"
                type="password-confirm"
                placeholder="Confirm Password"
                required
              />
            </div>
          </div>
        </div>
      </Route>
      <Route path='/home'>
        <Home />
      </Route>
    </div>
  );
}

export default Signup;
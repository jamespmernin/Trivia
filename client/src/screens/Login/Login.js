import React from 'react';
import { Route } from "react-router-dom";
import Home from '../Home/Home';
import './Login.css';

const Login = () => {
  /* User name and password both need to be validated to match the user database */
  return (
    <div>
      <div id="login-main-container">
        <div id="login-header-container">
          <h1 id="login-header">Log In!</h1>
        </div>
        <div id="credentials-box">
          <div id="login-username-box">
            <label htmlFor="username">Username:</label>
            <input
              type="username"
              id="login-username"
              placeholder="Username"
              required
              autoFocus
            />
          </div>
          <div id="login-password-box">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              required
            />
          </div>
        </div>
      </div>
      <Route path='/home'>
        <Home />
      </Route>
    </div>
  );
}

export default Login;
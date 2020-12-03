import React from 'react';
import { NavLink } from "react-router-dom";
import Layout from '../../components/shared/Layout/Layout';
import './Login.css';

const Login = () => {
  /* User name and password both need to be validated to match the user database */
  return (
    <Layout>
      <div id="login-main-container">
        <div id="login-header-container">
          <NavLink id="arrow-link" to="/">
            <img id="arrow" src="/assets/arrow-go-back.png" alt="backpointing arrow" />
          </NavLink>
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
    </Layout>
  );
}

export default Login;
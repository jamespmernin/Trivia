import React from 'react';
import { NavLink as Link } from "react-router-dom";
import Signup from '../Signup/Signup';
import './Landing.css';

const Landing = () => {
  return (
    <div>
      <h1>Welcome to Trivia!</h1>
      <h2>Get ready to stump your friends...or be stumped!</h2>
      <div id="register">
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </div>
    </div>
  );
}

export default Landing;
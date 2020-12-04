import React from 'react';
import { NavLink as Link } from "react-router-dom";
import Signup from '../Signup/Signup';
import './Landing.css';

const Landing = () => {
  return (
    <div>
      <h1 id="landing-header">Welcome to Trivia!</h1>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Log In</Link>
    </div>
  );
}

export default Landing;
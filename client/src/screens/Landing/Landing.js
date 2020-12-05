import React from 'react';
import { Link } from "react-router-dom";
import './Landing.css';

const Landing = () => {
  return (
    <div>
      <h2>Get ready to stump your friends...or be stumped!</h2>
      <div id="register">
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}

export default Landing;
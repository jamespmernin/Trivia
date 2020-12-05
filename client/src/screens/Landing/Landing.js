import React from 'react';
import { Link } from "react-router-dom";
import Layout from '../../layouts/Layout';
import './Landing.css';

const Landing = () => {
  return (
    <Layout>
      <h2>Get ready to stump your friends...or be stumped!</h2>
      <div id="register">
        <Link to="/signup">Sign Up</Link>
      </div>
    </Layout>
  );
}

export default Landing;
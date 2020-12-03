import React from 'react';
import { NavLink as Link } from "react-router-dom";
import Layout from '../../components/shared/Layout/Layout';
import './Landing.css';

const Landing = () => {
  return (
    <Layout>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Log In</Link>
    </Layout>
  );
}

export default Landing;
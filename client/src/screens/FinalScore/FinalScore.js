import React from 'react';
import { Link } from "react-router-dom";
import Layout from '../../layouts/Layout';
import './FinalScore.css';

const Leaderboard = () => {
  return (
    <Layout>
      <h1>Final Score</h1>
      {/* Link to go home and notice of high score achieved if it was achieved */}
      <Link to="/home">Home</Link>
    </Layout>
  );
}

export default Leaderboard;
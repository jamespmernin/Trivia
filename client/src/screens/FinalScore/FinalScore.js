import React from 'react';
import { Link } from "react-router-dom";
import './FinalScore.css';

const Leaderboard = () => {
  return (
    <div>
      <h1>Final Score</h1>
      {/* Link to go home and notice of high score achieved if it was achieved */}
      <Link to='/home'><button>Home</button></Link>
    </div>
  );
}

export default Leaderboard;
import React from 'react';
import { Link } from "react-router-dom";
import './Leaderboard.css';

const Leaderboard = () => {
  return (
    <div>
      {/* Needs to display all the high scores from the SQL table, this is post MVP */}
      <Link to='/home'><button>Home</button></Link>
    </div>
  );
}

export default Leaderboard;
import React from 'react';
import { NavLink } from "react-router-dom";
import Layout from '../../components/shared/Layout/Layout';
import './Leaderboard.css';

const Leaderboard = () => {
  return (
    <Layout>
      {/* Needs to display all the high scores from the SQL table, this is post MVP */}
      <Link to="/home">Home</Link>
    </Layout>
  );
}

export default Leaderboard;
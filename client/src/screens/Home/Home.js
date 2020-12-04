import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
  return (
    <Layout>
      {/* Need a section for top five on leaderboard, a link to the full leaderboard, a link to make a quiz, a link to take a quiz, a link to edit account, and a link to log out */}
      {/* Top five scores go here */}
      <Link to="/leaderboard">Leaderboard</Link>
      <Link to="/makequiz">Make a Quiz</Link>
      <Link to="/takequiz">Take a Quiz</Link>
      <Link to="/accountdetails">Edit Account</Link>
      <Link to="/" exact>Log Out</Link>
    </Layout>
  );
}
export default Home;
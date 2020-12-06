import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      {/* Need a section for top five on leaderboard, a link to the full leaderboard, a link to make a quiz, a link to take a quiz, a link to edit account, and a link to log out */}
      {/* Top five scores go here post-MVP */}
      {/* <Link to="/leaderboard">Leaderboard</Link> */}
      <Link to="/makequiz"><button>Make a Quiz</button></Link>
      <Link to="/takequiz"><button>Take a Quiz</button></Link>
      <Link to="/myprofile"><button>View Profile</button></Link>
      <Link to="/" exact><button>Log Out</button></Link>
    </div>
  );
}
export default Home;
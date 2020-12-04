import React from 'react';
import { Route } from "react-router-dom";
import Leaderboard from "../Leaderboard/Leaderboard"
import MakeQuiz from "../MakeQuiz/MakeQuiz"
import TakeQuiz from "../TakeQuiz/TakeQuiz"
import EditAccount from "../EditAccount/EditAccount"
import Landing from "../Landing/Landing"
import './Home.css';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      {/* Need a section for top five on leaderboard, a link to the full leaderboard, a link to make a quiz, a link to take a quiz, a link to edit account, and a link to log out */}
      {/* Top five scores go here */}
      <Route path="/leaderboard"><Leaderboard /></Route>
      <Route path="/makequiz"><MakeQuiz /></Route>
      <Route path="/takequiz"><TakeQuiz /></Route>
      <Route path="/accountdetails"><EditAccount /></Route>
      <Route path="/"><Landing /></Route>
    </div>
  );
}
export default Home;
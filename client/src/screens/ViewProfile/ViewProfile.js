import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { getUserQuizzes } from "../../services/quizzes";
import './ViewProfile.css';

const ViewProfile = (props) => {
  const [myQuizzes, setMyQuizzes] = useState([])

  useEffect(() => {
    const fetchQuizzes = async () => {
      const quizzes = await getUserQuizzes();
      setMyQuizzes(quizzes);
    }
    if (props.currentUser) {
      fetchQuizzes();
    }
  }, [props.currentUser])

  return (
    <div>
      <h1>My Profile</h1>
      <h3>Username: {props.currentUser?.username}</h3>
      <hr />
      <h3>My Quizzes</h3>
      {myQuizzes.map((quiz) => (
        <div>
          <h4>Name: {quiz.name} Difficulty: {quiz.difficulty}</h4>
        </div>
      ))}
      <Link to='/home'><button>Home</button></Link>
    </div>
  );
}

export default ViewProfile;
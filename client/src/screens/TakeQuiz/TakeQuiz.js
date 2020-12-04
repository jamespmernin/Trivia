import React from 'react';
import { Link } from "react-router-dom";
import './TakeQuiz.css';

const TakeQuiz = () => {
  return (
    <div>
      <h1>Take a Quiz</h1>
      <h2>Pick a quiz from the below choices</h2>
      {/* List of saved quizzes in the database with title of quiz and user who created it. Take, edit, or delete (full CRUD) */}
    </div>
  );
}

export default TakeQuiz;
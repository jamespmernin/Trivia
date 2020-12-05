import React from 'react';
import { Link } from "react-router-dom";
import './MakeQuiz.css';

const MakeQuiz = () => {
  return (
    <div>
      <h1>Make Quiz</h1>
      <h2>Make a title for your quiz here.</h2>
      {/* Allow a text form here to fill out a title (required) */}
      <h2>For each question (ten total), come up with a question, four answers, and choose which answer is correct.</h2>
      {/* Form for question, forms for answers, radio button for correct answer, do this ten times */}
      {/* Button to save, button to discard, button to submit */}
      <Link to='/home'><button>Home</button></Link>
    </div>
  );
}

export default MakeQuiz;
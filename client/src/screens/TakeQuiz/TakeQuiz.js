import React from 'react';
import { Link } from "react-router-dom";
import Layout from '../../layouts/Layout';
import './TakeQuiz.css';

const TakeQuiz = () => {
  return (
    <Layout>
      <h1>Take a Quiz</h1>
      <h2>Pick a quiz from the below choices</h2>
      {/* List of saved quizzes in the database with title of quiz and user who created it. Take, edit, or delete (full CRUD) */}
    </Layout>
  );
}

export default TakeQuiz;
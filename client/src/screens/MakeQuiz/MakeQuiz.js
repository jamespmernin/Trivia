import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { createQuiz } from "../../services/quizzes.js";
import './MakeQuiz.css';

const MakeQuiz = () => {
  const [formData, setFormData] = useState({
    name: '',
    difficulty: ''
  })

  const history = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const quiz = await createQuiz(formData);
    history.push(`/makequiz/${quiz.id}`)
  }

  return (
    <div>
      <h1>Make Quiz</h1>
      <h2>Make a title for your quiz here.</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:
        <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>Difficulty:
        <input
            type='text'
            name='difficulty'
            value={formData.difficulty}
            onChange={handleChange}
          />
        </label>
        <button>Next</button>
      </form>
      <button>Submit Quiz</button>
      <Link to='/home'><button>Home</button></Link>
    </div >
  );
}

export default MakeQuiz;
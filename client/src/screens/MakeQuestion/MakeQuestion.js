import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { createQuiz } from "../../services/quizzes.js"; //?
import './MakeQuestion.css';

const MakeQuestion = () => {
  const [formData, setFormData] = useState({
    question: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createQuiz(formData); //?
  }

  return (
    <div>
      <h1>Question </h1> {/* need id */}
      <h2>Make a question here.</h2>
      <form onSubmit={handleSubmit}>
        <label>Question:
        <input
            type='text'
            name='question'
            value={formData.question}
            onChange={handleChange}
          />
        </label>
        <button>Next</button>
      </form>
    </div>
  )
}

export default MakeQuestion;
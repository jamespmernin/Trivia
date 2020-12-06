import React, { useState } from 'react';
import { Link, useHistory, useParams } from "react-router-dom";
import { createAnswer } from "../../services/answers.js";
import './MakeAnswer.css';

const MakeAnswer = () => {
  const
  const { id } = useParams();

  const [formData, setFormData] = useState({
    answerA: '',
    answerA_isCorrect: false,
    answerB: '',
    answerB_isCorrect: false,
    answerC: '',
    answerC_isCorrect: false,
    answerD: '',
    answerD_isCorrect: false
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
    await createQuestion(formData);
  }

  return (
    <div>
      <h1>Answer </h1> {/* need id */}
      <h2>Make your answers here.</h2>
      <form onSubmit={handleSubmit}>
        <label>Answer A:
        <input
            type='text'
            name='answerA'
            value={formData.answerA}
            onChange={handleChange}
          />
        </label>
        <label>Answer B:
        <input
            type='text'
            name='answerB'
            value={formData.answerB}
            onChange={handleChange}
          />
        </label>
        <label>Answer C:
        <input
            type='text'
            name='answerC'
            value={formData.answerC}
            onChange={handleChange}
          />
        </label>
        <label>Answer D:
        <input
            type='text'
            name='answerD'
            value={formData.answerD}
            onChange={handleChange}
          />
        </label>
        <label>Please pick one answer to be correct:
          <input

          />
        </label>
        <button>Next</button>
      </form>
    </div>
  )
}

export default MakeAnswer;
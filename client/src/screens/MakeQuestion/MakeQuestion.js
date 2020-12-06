import React, { useState } from 'react';
import { Link, useHistory, useParams } from "react-router-dom";
import { createQuestion } from "../../services/questions.js";
import './MakeQuestion.css';

const MakeQuestion = () => {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    question: '',
    quiz_id: id
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
    const question = await createQuestion(formData);
    history.push(`/makequiz/${id}/makequestion/${question.id}`)
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
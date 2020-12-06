import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from "react-router-dom";
import { updateQuiz, getQuiz } from "../../services/quizzes.js";
import './EditQuiz.css';

const EditQuiz = () => {
  const [formData, setFormData] = useState({
    name: '',
    difficulty: ''
  })

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const preFill = async () => {
      const quizData = await getQuiz(id);
      setFormData({
        name: quizData.name,
        difficulty: quizData.difficulty
      })
    }
    preFill();
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const quiz = await updateQuiz(id, formData);
    history.push('/myprofile')
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
        <button>Save Changes</button>
      </form>
    </div>
  );
}

export default EditQuiz;
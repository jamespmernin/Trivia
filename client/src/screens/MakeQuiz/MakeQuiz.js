import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { createQuiz } from "../../services/quizzes.js";
import './MakeQuiz.css';

const MakeQuiz = () => {
  const [formData, setFormData] = useState({
    name: '',
    difficulty: ''
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
    await createQuiz(formData);
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
      {/* <h2>For each question (ten total), come up with a question, four answers, and choose which answer is correct.</h2>
      <div id='quizquestion1'>
        <label>Question 01:</label>
        <input
          type='text'
          name='question1'
        />
        <label>Answer A:</label>
        <input
          type='text'
          name='answer1a'
        />
        <label>Answer B:</label>
        <input
          type='text'
          name='answer1b'
        />
        <label>Answer C:</label>
        <input
          type='text'
          name='answer1c'
        />
        <label>Answer D:</label>
        <input
          type='text'
          name='answer1d'
        />
      </div>
      <div id='quizquestion2'>
        <label>Question 02:</label>
        <input
          type='text'
          name='question2'
        />
        <label>Answer A:</label>
        <input
          type='text'
          name='answer2a'
        />
        <label>Answer B:</label>
        <input
          type='text'
          name='answer2b'
        />
        <label>Answer C:</label>
        <input
          type='text'
          name='answer2c'
        />
        <label>Answer D:</label>
        <input
          type='text'
          name='answer2d'
        />
      </div>
      <div id='quizquestion3'>
        <label>Question 03:</label>
        <input
          type='text'
          name='question3'
        />
        <label>Answer A:</label>
        <input
          type='text'
          name='answer3a'
        />
        <label>Answer B:</label>
        <input
          type='text'
          name='answer3b'
        />
        <label>Answer C:</label>
        <input
          type='text'
          name='answer3c'
        />
        <label>Answer D:</label>
        <input
          type='text'
          name='answer3d'
        />
      </div>
      <div id='quizquestion4'>
        <label>Question 04:</label>
        <input
          type='text'
          name='question4'
        />
        <label>Answer A:</label>
        <input
          type='text'
          name='answer4a'
        />
        <label>Answer B:</label>
        <input
          type='text'
          name='answer4b'
        />
        <label>Answer C:</label>
        <input
          type='text'
          name='answer4c'
        />
        <label>Answer D:</label>
        <input
          type='text'
          name='answer4d'
        />
      </div>
      <div id='quizquestion5'>
        <label>Question 05:</label>
        <input
          type='text'
          name='question5'
        />
        <label>Answer A:</label>
        <input
          type='text'
          name='answer5a'
        />
        <label>Answer B:</label>
        <input
          type='text'
          name='answer5b'
        />
        <label>Answer C:</label>
        <input
          type='text'
          name='answer5c'
        />
        <label>Answer D:</label>
        <input
          type='text'
          name='answer5d'
        />
      </div>
      <div id='quizquestion6'>
        <label>Question 06:</label>
        <input
          type='text'
          name='question6'
        />
        <label>Answer A:</label>
        <input
          type='text'
          name='answer6a'
        />
        <label>Answer B:</label>
        <input
          type='text'
          name='answer6b'
        />
        <label>Answer C:</label>
        <input
          type='text'
          name='answer6c'
        />
        <label>Answer D:</label>
        <input
          type='text'
          name='answer6d'
        />
      </div>
      <div id='quizquestion7'>
        <label>Question 07:</label>
        <input
          type='text'
          name='question7'
        />
        <label>Answer A:</label>
        <input
          type='text'
          name='answer7a'
        />
        <label>Answer B:</label>
        <input
          type='text'
          name='answer7b'
        />
        <label>Answer C:</label>
        <input
          type='text'
          name='answer7c'
        />
        <label>Answer D:</label>
        <input
          type='text'
          name='answer7d'
        />
      </div>
      <div id='quizquestion8'>
        <label>Question 08:</label>
        <input
          type='text'
          name='question8'
        />
        <label>Answer A:</label>
        <input
          type='text'
          name='answer8a'
        />
        <label>Answer B:</label>
        <input
          type='text'
          name='answer8b'
        />
        <label>Answer C:</label>
        <input
          type='text'
          name='answer8c'
        />
        <label>Answer D:</label>
        <input
          type='text'
          name='answer8d'
        />
      </div>
      <div id='quizquestion9'>
        <label>Question 09:</label>
        <input
          type='text'
          name='question9'
        />
        <label>Answer A:</label>
        <input
          type='text'
          name='answer9a'
        />
        <label>Answer B:</label>
        <input
          type='text'
          name='answer9b'
        />
        <label>Answer C:</label>
        <input
          type='text'
          name='answer9c'
        />
        <label>Answer D:</label>
        <input
          type='text'
          name='answer9d'
        />
      </div>
      <div id='quizquestion10'>
        <label>Question 10:</label>
        <input
          type='text'
          name='question10'
        />
        <label>Answer A:</label>
        <input
          type='text'
          name='answer10a'
        />
        <label>Answer B:</label>
        <input
          type='text'
          name='answer10b'
        />
        <label>Answer C:</label>
        <input
          type='text'
          name='answer10c'
        />
        <label>Answer D:</label>
        <input
          type='text'
          name='answer10d'
        /> */}
      {/* </div> */}
      {/* Form for question, forms for answers, radio button for correct answer, do this ten times */}
      {/* Button to save, button to discard, button to submit */}
      <button>Submit Quiz</button>
      <Link to='/home'><button>Home</button></Link>
    </div >
  );
}

export default MakeQuiz;
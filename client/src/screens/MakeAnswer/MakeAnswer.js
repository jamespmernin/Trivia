import React, { useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { createAnswer } from "../../services/answers.js";
import './MakeAnswer.css';

const MakeAnswer = () => {
  const { id, quiz_id } = useParams();

  const [formData, setFormData] = useState([
    { answer: '', isCorrect: false },
    { answer: '', isCorrect: false },
    { answer: '', isCorrect: false },
    { answer: '', isCorrect: false }
  ])

  const history = useHistory();

  // Four answers, index of answer we modify
  // Loop over all the answers, we check each answer for index
  // If index matches, a new object is returned with everything that was in the answer and we replace the "answer" attribute with a new value
  // If not, we return original answer
  const handleChange = (event) => {
    const { value, dataset } = event.target;
    setFormData(prevState => prevState.map((answer, i) => {
      return i === parseInt(dataset.index) ? { ...answer, answer: value } : answer;
    }))
  }

  const handleRadioChange = (event) => {
    const { checked, dataset } = event.target;
    setFormData(prevState => prevState.map((answer, i) => {
      return i === parseInt(dataset.index) ? { ...answer, isCorrect: checked } : { ...answer, isCorrect: false };
    }))
  }

  const handleSubmit = async () => {
    await createAnswer(id, { answer_data: formData });
  }

  return (
    <div>
      <h1>Answer</h1>
      <h2>Make your answers here.</h2>
      <form onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
        history.push(`/makequiz/${quiz_id}`)
      }}>
        {formData.map((answer, index) => (
          <div class="answers" key={index}>
            <label>Answer {index + 1}
              <input class="answer"
                type='text'
                data-index={index}
                value={answer.answer}
                onChange={handleChange}
              />
            </label>
            <label><input type='radio' data-index={index} checked={answer.isCorrect} onChange={handleRadioChange} />Correct</label>
          </div>
        ))}
        <button>Next Question</button>
        <button onClick={(event) => {
          event.preventDefault();
          handleSubmit();
          history.push('/myprofile')
        }}>Submit Quiz</button>
      </form>
    </div>
  )
}

export default MakeAnswer;
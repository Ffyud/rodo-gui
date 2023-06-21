import React, { useState } from 'react';

function Quiz() {
  const [questions, setQuestions] = useState([
    {
      question: 'Waar was de mol bij opdracht1?',
      choices: ['Thuis', 'Buiten', 'Nergens'],
      answer: 'Thuis',
    },
    {
      question: 'Was de mol onderdeel van de onderzoeksgroep?',
      choices: ['Ja', 'Nee'],
      answer: 'Nee',
    },
    {
      question: 'Hoeveel geld heeft de mol verdient bij opdracht1?',
      choices: ['100', '50', '>100', '0'],
      answer: '50',
    },
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (selectedChoice === questions[currentQuestionIndex].answer) {
    //   alert('Correct!');
    // } else {
    //   alert('Incorrect!');
    // }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedChoice('');
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      {currentQuestion ? (
        <form onSubmit={handleSubmit}>
          <h2>{currentQuestion.question}</h2>
          <div>
            {currentQuestion.choices.map((choice) => (
              <div key={choice}>
                <label>
                  <input
                    type="radio"
                    name="choice"
                    value={choice}
                    checked={selectedChoice === choice}
                    onChange={(event) => setSelectedChoice(event.target.value)}
                  />
                  {choice}
                </label>
              </div>
            ))}
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>No more questions.</div>
      )}
    </div>
  );
}

export default Quiz;
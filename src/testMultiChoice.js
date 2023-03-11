import React, { useState, useEffect } from 'react';

function Question() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState('');
  const [debugMode, setDebugMode] = useState(false);

  useEffect(() => {
    if (!debugMode) {
      fetch('https://example.com/api/questions')
        .then(response => response.json())
        .then(data => setQuestions(data))
        .catch(error => console.error(error));
    } else {
      // Use local data for testing
      const localQuestions = [
        {
          question: 'Waar was de mol bij opdracht 1?',
          choices: ['Op de bank', 'Buiten', 'Boven', 'WC'],
          answer: 'WC'
        },
        {
          question: 'Met wie vormde de mol een tweetal?',
          choices: ['Eduardo', 'Olav', 'Hakim', 'Repelsteeltje'],
          answer: 'Hakim'
        }
      ];
      setQuestions(localQuestions);
    }
  }, [debugMode]);

  useEffect(() => {
    setSelectedChoice('');
  }, [currentQuestionIndex]);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedChoice) {
        alert('Please select an answer');
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    if (selectedChoice === currentQuestion.answer) {
      // Correct answer, move to next question

    } else {
      // Incorrect answer
      //alert('Incorrect answer, please try again.');
    }
    //Next question - nog checken of selectie is gemaakt
    if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        // End of quiz
        alert('Einde!');
      }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      {questions.length > 0 ? (
        <>
          <h2>{currentQuestion.question}</h2>
          <form onSubmit={handleSubmit}>
            {currentQuestion.choices.map((choice, index) => (
              <div key={index}>
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
            <button type="submit">Submit</button>
          </form>
        </>
      ) : (
        <p>Loading questions...</p>
      )}
      <button onClick={() => setDebugMode(!debugMode)}>
        {debugMode ? 'Disable Debug Mode' : 'Enable Debug Mode'}
      </button>
    </div>
  );
}

export default Question;

import React, { useState } from 'react';

import DarkModeForm from './darkmode_form';
import LightModeForm from './lightmode_form';

const Questionnaire = () => {
  const [answers, setAnswers] = useState({});
  const [questions, setQuestions] = useState([
    { id: 1, text: "What is this project about?" },
    { id: 2, text: "Why in so many different languages??" },
    { id: 3, text: "How do I add a question?" },
    { id: 4, text: "Why does it persist on the other page?" },
    { id: 5, text: "Oh, because it's the same page?" },
  ]);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleAddQuestion = (e) => {
    e.preventDefault();
    setQuestions([...questions, { id: questions.length + 1, text: e.target.question.value }]);
    e.target.question.value = "";
  };

  return (
    <div>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      {darkMode ? (
        <DarkModeForm
          questions={questions}
          handleChange={handleChange}
          handleAddQuestion={handleAddQuestion}
          answers={answers}
        />
      ) : (
        <LightModeForm
          questions={questions}
          handleChange={handleChange}
          handleAddQuestion={handleAddQuestion}
          answers={answers}
        />
      )}
    </div>
  );
};

export default Questionnaire;

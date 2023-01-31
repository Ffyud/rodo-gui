import React, { useState } from "react";

const Questionnaire = () => {
  const [answers, setAnswers] = useState({});
  const [questions, setQuestions] = useState([
    { id: 1, text: "Wat is dit voor een project?" },
    { id: 2, text: "Waarom in zoveel verschillende talen??" },
    { id: 3, text: "Hoe voeg ik een vraag toe?" },
    { id: 4, text: "Waarom blijft dit op ook op de andere pagina staan?" },
    { id: 5, text: "Ah omdat dit dezelfde pagina is?" },
  ]);

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
      <form>
        <h1>Vragenlijst</h1>
        {questions.map((question) => (
          <div key={question.id}>
            <label htmlFor={`question-${question.id}`}>{question.text}</label>
            <input
              type="text"
              id={`question-${question.id}`}
              name={`question-${question.id}`}
              onChange={handleChange}
            />
            <br />
            <br />
          </div>
        ))}
        <button type="submit">Verzend</button>
      </form>
      <pre>{JSON.stringify(answers, null, 2)}</pre>
      <h2>Vraag aanmaken</h2>
      <form onSubmit={handleAddQuestion}>
        <label htmlFor="question">Vraag:</label>
        <input type="text" id="question" name="question" />
        <br />
        <br />
        <button type="submit">Voeg toe</button>
      </form>
    </div>
  );
};

export default Questionnaire;

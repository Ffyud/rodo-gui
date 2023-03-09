import React from 'react';
const LightModeForm = (props) => {
  return (
    <form onSubmit={props.handleAddQuestion}>
      <h1>Light Mode Form</h1>
      {props.questions.map((question) => (
        <div key={question.id}>
          <label>{question.text}</label>
          <input type="text" name={question.id} onChange={props.handleChange} />
        </div>
      ))}
      <input type="text" name="question" />
      <button>Add Question</button>
    </form>
  );
};
export default LightModeForm;
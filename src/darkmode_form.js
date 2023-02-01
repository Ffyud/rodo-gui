import React from 'react';
import "./mode_form.css";

const DarkModeForm = (props) => {
  return (
    <div style={{ backgroundColor: 'black', color: 'white' }}>
    <form onSubmit={props.handleAddQuestion}>
      <h1 style={{ color: 'white' }}>Dark Mode Form</h1>
      {props.questions.map((question) => (
        <div key={question.id}>
          <label style={{ color: 'white' }}>{question.text}</label>
          <input
            type="text"
            name={question.id}
            onChange={props.handleChange}
            style={{ backgroundColor: 'black', color: 'white' }}
          />
        </div>
      ))}
      <input type="text" name="question" style={{ backgroundColor: 'black', color: 'white' }} />
      <button style={{ backgroundColor: 'black', color: 'white' }}>Add Question</button>
    </form>
    </div>
  );
};

export default DarkModeForm;
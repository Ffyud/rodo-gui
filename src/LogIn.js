import React, { useState } from 'react';
import "./LogIn.css";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (username === 'test' && password === '1234') {
          console.log('Login successful');
      } else {
          setErrorMessage('Incorrect username or password. Please try again.');
          console.log('Login failed');
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
        <button type="submit">Submit</button>
  
      </form>
  
    );
  };
  
  export default LoginForm;
  
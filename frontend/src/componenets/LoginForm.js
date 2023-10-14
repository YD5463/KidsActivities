import React, { useState } from 'react';
import StyledInput from './StyledInput'; // Import your StyledInput component
import './LoginForm.css'; // Import your CSS file for styling the login form
import StyledButton from './StyledButton';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Implement your login logic here
    // Typically, you would make an API call to authenticate the user
    // For this example, we'll just log the values to the console
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <StyledInput
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
        className="login-input"
      />
      <StyledInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
        className="login-input"
      />
      <StyledButton onClick={handleLogin} className="login-button">
        Log In
      </StyledButton>
    </div>
  );
}

export default LoginForm;

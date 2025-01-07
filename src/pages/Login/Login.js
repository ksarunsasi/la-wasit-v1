// src/pages/Login/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const LoginForm = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: #d61c62;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 16px;

  &:hover {
    background: #c01857;
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Demo credentials
    if (email === 'demo@example.com' && password === 'password123') {
      login({ email });
      navigate('/');
    } else {
      alert('Please use demo@example.com and password123');
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <h2>Welcome to La-Wasit</h2>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
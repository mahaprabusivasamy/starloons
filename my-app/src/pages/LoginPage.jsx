import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./LoginPage.css"

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://127.0.0.1:8000/login', formData);
      localStorage.setItem('user', JSON.stringify(response.data));
      if (formData.email === 'admin@email.com') {
        navigate('/admin');
      } else {
        navigate('/profile');
      }
    } catch (error) {
      alert('Login failed!');
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
    <input className="form-input" name="email" placeholder="Email" type="email" onChange={handleChange} />
    <input className="form-input" name="password" placeholder="Password" type="password" onChange={handleChange} />
    <button className="submit-button" type="submit">Login</button>
  </form>
  );
}

export default Login;

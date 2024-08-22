import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./SignUp.css"

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://your-backend-url/signup', formData);
      alert('Signup successful!');
      navigate('/login');
    } catch (error) {
      alert('Signup failed!');
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
    <input className="form-input" name="name" placeholder="Name" onChange={handleChange} />
    <input className="form-input" name="email" placeholder="Email" type="email" onChange={handleChange} />
    <input className="form-input" name="password" placeholder="Password" type="password" onChange={handleChange} />
    <select className="form-select" name="gender" onChange={handleChange}>
      <option value="">Select Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </select>
    <button className="submit-button" type="submit">Sign Up</button>
  </form>
  );
}

export default Signup;

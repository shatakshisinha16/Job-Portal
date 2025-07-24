// src/components/JobPostForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/JobPostForm.css'; // ✅ Make sure this path is correct

const API_BASE_URL = process.env.REACT_APP_BACKEND_API_URL || 'http://127.0.0.1:8000/api';

const JobPostForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [skillsRequired, setSkillsRequired] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const token = localStorage.getItem('token');
    if (!token) {
      setError('You must be logged in to post a job.');
      return;
    }

    try {
      const response = await axios.post(
        `${API_BASE_URL}/jobs/`,
        { title, description, skills_required: skillsRequired },
        { headers: { Authorization: `Token ${token}` } }
      );
      setSuccess('Job posted successfully!');
      setTitle('');
      setDescription('');
      setSkillsRequired('');
    } catch (error) {
      if (error.response && error.response.data) {
        setError(
          typeof error.response.data === 'object'
            ? JSON.stringify(error.response.data)
            : String(error.response.data)
        );
      } else {
        setError('Failed to post job.');
      }
    }
  };

  return (
    <div className="jobpost-bg">
      <div className="jobpost-container">
        <h2 className="jobpost-heading">Post a Job</h2>
        <form onSubmit={handleSubmit} className="jobpost-form">
          <input
            type="text"
            placeholder="Enter job title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Enter job description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Skills required (comma separated)"
            value={skillsRequired}
            onChange={(e) => setSkillsRequired(e.target.value)}
          />
          <button type="submit">Submit</button>
          {error && <p className="error">Error: {error}</p>}
          {success && <p className="success">{success}</p>}
        </form>
      </div>
    </div>
  );
};

export default JobPostForm;

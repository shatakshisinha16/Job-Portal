// src/components/JobPostForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/JobPostForm.css'; // ✅ Make sure this path is correct

const JobPostForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [skillsRequired, setSkillsRequired] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    if (!token) {
      alert('You must be logged in to post a job.');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:8000/api/jobs/',
        { title, description, skills_required: skillsRequired },
        { headers: { Authorization: `Token ${token}` } }
      );
      alert('Job posted successfully!');
      setTitle('');
      setDescription('');
      setSkillsRequired('');
    } catch (error) {
      console.error('Error posting job:', error.response?.data || error.message);
      alert('Failed to post job.');
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
        </form>
      </div>
    </div>
  );
};

export default JobPostForm;

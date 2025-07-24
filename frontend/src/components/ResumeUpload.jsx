import React, { useState } from 'react';
import API from '../api/api';
import '../styles/ResumeUpload.css'; // Import the CSS

function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState("");

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await API.post('resumes/upload/', formData);
      setSkills(res.data.skills);
      setError("");
    } catch (err) {
      setError("Failed to upload resume");
      setSkills([]);
    }
  };

  return (
    <div className="resume-upload-container">
      <div className="resume-card">
        <h2>Upload Your Resume</h2>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} className="file-input" />
        <button className="upload-btn" onClick={handleUpload}>
          Upload Resume
        </button>
        {error && <p className="error-msg">{error}</p>}
        {skills.length > 0 && (
          <div className="skills-section">
            <h3>Extracted Skills:</h3>
            <ul>
              {skills.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResumeUpload;

import React, { useState } from 'react';
import API from '../api/api';
import '../styles/JobMatch.css'; // Make sure this CSS file exists

function JobMatch() {
  const [resumeId, setResumeId] = useState('');
  const [jobId, setJobId] = useState('');
  const [result, setResult] = useState(null);

  const handleMatch = async () => {
    try {
      const res = await API.post('resume/match/', {
        resume_id: resumeId,
        job_id: jobId
      });
      setResult(res.data);
    } catch (error) {
      console.error("Matching failed:", error);
    }
  };

  return (
    <div className="job-match-page">
      <div className="job-match-card">
        <h2 className="title">Match Resume with Job</h2>
        <input
          type="number"
          placeholder="Resume ID"
          value={resumeId}
          onChange={(e) => setResumeId(e.target.value)}
          className="input-field"
        />
        <input
          type="number"
          placeholder="Job ID"
          value={jobId}
          onChange={(e) => setJobId(e.target.value)}
          className="input-field"
        />
        <button className="match-btn" onClick={handleMatch}>
          Check Match
        </button>

        {result && (
          <div className="result-box">
            <p><strong>Score:</strong> {result.score}%</p>
            <p><strong>Matched Keywords:</strong> {result.matched_keywords.join(', ')}</p>
            <p><strong>Missing Keywords:</strong> {result.missing_keywords.join(', ')}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default JobMatch;

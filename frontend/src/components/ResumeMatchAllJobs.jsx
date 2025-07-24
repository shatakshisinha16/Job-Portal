import React, { useEffect, useState } from 'react';
import API from '../api/api';
import '../styles/ResumeMatchAllJobs.css'; 

function ResumeMatchAllJobs() {
  const [resumes, setResumes] = useState([]);
  const [resumeId, setResumeId] = useState('');
  const [results, setResults] = useState([]);
  const [selectedResumeName, setSelectedResumeName] = useState('');

  useEffect(() => {
    const fetchResumes = async () => {
      const res = await API.get('resumes/');
      setResumes(res.data);
    };
    fetchResumes();
  }, []);

  const handleMatchAll = async () => {
    try {
      const selected = resumes.find(r => r.id.toString() === resumeId);
      setSelectedResumeName(selected?.resume_name || `Resume ${resumeId}`);

      const res = await API.get(`resumes/${resumeId}/match_jobs/`);
      setResults(res.data.results || []);
    } catch (err) {
      console.error("Matching failed", err);
    }
  };

  return (
    <div className="rainbow-bg flex justify-center items-center min-h-screen">
      <div className="resume-card p-6 rounded-xl shadow-xl bg-white w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">🎯 Resume Job Matcher</h2>

        <div className="mb-4">
          <label className="block mb-2 font-medium">Select Resume</label>
          <select
            onChange={(e) => setResumeId(e.target.value)}
            value={resumeId}
            className="w-full p-2 border rounded placeholder-gray-400"
          >
            <option value="">-- Choose Resume --</option>
            {resumes.map((r) => (
              <option key={r.id} value={r.id}>
                {r.resume_name}
              </option>
            ))}
          </select>
        </div>

        <div className="text-center mb-6">
          <button
            onClick={handleMatchAll}
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-all duration-300"
            disabled={!resumeId}
          >
            Match Jobs 🚀
          </button>
        </div>

        {results.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2 text-center">
              Matching Jobs for <span className="text-blue-700">{selectedResumeName}</span>
            </h3>
            {results.map((job, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded mb-3 shadow-sm">
                <h4 className="text-md font-bold">{job.job_title}</h4>
                <p className="text-sm">Score: {job.match_score}%</p>
                <p className="text-sm text-gray-700">Matched Skills: {job.matched_skills.join(', ')}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ResumeMatchAllJobs;

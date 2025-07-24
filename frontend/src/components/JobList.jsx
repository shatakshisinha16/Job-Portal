import React, { useEffect, useState } from 'react';
import API from '../api/api'; // make sure this is correct
import '../styles/JobList.css';

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await API.get('/jobs/');
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="job-list-container">
      <h2 className="job-list-heading">Available Jobs</h2>
      <div className="job-cards">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div className="job-card" key={job.id}>
              <h3 className="job-title">{job.title}</h3>
              <p className="job-description">{job.description}</p>
              <div className="job-skills">
                Required Skills: {job.skills_required}
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', color: '#6b7280' }}>No jobs available currently.</p>
        )}
      </div>
    </div>
  );
}

export default JobList;

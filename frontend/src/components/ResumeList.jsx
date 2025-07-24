import React, { useEffect, useState } from "react";
import axios from "axios";
import '../styles/ResumeList.css';  // Make sure the path is correct

const ResumeList = () => {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://127.0.0.1:8000/api/resumes/", {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        setResumes(response.data);
      } catch (error) {
        console.error("Error fetching resumes:", error);
      }
    };

    fetchResumes();
  }, []);

  return (
    <div className="resume-list-container">
      <h2 className="resume-title">Uploaded Resumes</h2>
      {resumes.length === 0 ? (
        <p className="no-resumes">No resumes uploaded yet.</p>
      ) : (
        <>
          {resumes.map((resume) => (
            <div key={resume.id} className="resume-card">
              <a
                href={resume.file}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-link"
              >
                {resume.file_name || resume.file.split("/").pop()}
              </a>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ResumeList;

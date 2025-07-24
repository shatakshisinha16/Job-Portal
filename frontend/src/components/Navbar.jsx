import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/home" className="brand-text">
          <span className="job-color">Job</span>
          <span className="portal-color">Portal</span>
        </Link>
      </div>

      <ul className="navbar-links">
        <li><Link to="/home">Home</Link></li>

        <li className="dropdown">
          <span>Jobs</span>
          <ul className="dropdown-content">
            <li><Link to="/jobs">Job List</Link></li>
            <li><Link to="/post-job">Post a Job</Link></li>
            <li><Link to="/online-jobs">Online Jobs</Link></li>
          </ul>
        </li>

        <li className="dropdown">
          <span>Resume</span>
          <ul className="dropdown-content">
            <li><Link to="/upload">Upload Resume</Link></li>
            <li><Link to="/resumes">Resume List</Link></li>
          </ul>
        </li>

        <li className="dropdown">
          <span>Match</span>
          <ul className="dropdown-content">
            <li><Link to="/match">Match Jobs</Link></li>
            <li><Link to="/match-resume">Match Resumes</Link></li>
            <li><Link to="/match-online-jobs">Match Online Jobs</Link></li>
          </ul>
        </li>

        <li className="dropdown">
          <span>Account</span>
          <ul className="dropdown-content">
            <li><Link to="/">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

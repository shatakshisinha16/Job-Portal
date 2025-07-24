import React from 'react'; 
import '../styles/HomePage.css';
import {
  FaLaptopCode, FaServer, FaPencilRuler, FaChartBar,
  FaUserPlus, FaSignInAlt, FaUpload, FaClipboardCheck,
  FaStar, FaBriefcase
} from 'react-icons/fa';

const slides = [
  {
    bg: 'linear-gradient(to right, #4facfe, #00f2fe)',
    img: 'https://cdn-icons-png.flaticon.com/512/1256/1256650.png',
    title: 'Upskill Your Future',
    quote: '“Dream big. Work hard. Stay focused.”',
  },
  {
    bg: 'linear-gradient(to right, #f77062, #fe5196)',
    img: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png', // NEW IMAGE
    title: 'Real Projects. Real Growth.',
    quote: '“Don’t wait for opportunity. Create it.”',
  },
  {
    bg: 'linear-gradient(to right, #00c9a7, #92fe9d)',
    img: 'https://cdn-icons-png.flaticon.com/512/3305/3305803.png',
    title: 'Build. Apply. Succeed.',
    quote: '“Success doesn’t come to you, you go to it.”',
  },
  {
    bg: 'linear-gradient(to right, #4facfe, #00f2fe)',
    img: 'https://cdn-icons-png.flaticon.com/512/1995/1995520.png',
    title: 'Your Career Starts Here',
    quote: '“Push yourself, because no one else will.”',
  }
];

const HomePage = () => {
  const handleExploreClick = () => {
    window.alert('Redirecting to job listings...');
  };

  return (
    <>
      {/* Hero Section */}
      <div className="homepage">
        <div className="hero-slider">
          {slides.map((slide, index) => (
            <section
              key={index}
              className="hero-slide-full"
              style={{ background: slide.bg }}
            >
              <div className="hero-content">
                <h1>{slide.title}</h1>
                <p>{slide.quote}</p>
                <button onClick={handleExploreClick}>Explore Jobs</button>
              </div>
              <div className="hero-image">
                <img src={slide.img} alt={`Slide ${index + 1}`} />
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Vertical Scrollable Sections */}
      <div className="vertical-section">

        {/* Popular Jobs */}
        <section className="section">
          <h2 className="section-heading">🔥 Popular Job Roles</h2>
          <div className="card-container">
            <div className="card">
              <FaLaptopCode className="card-icon" />
              <h3>Frontend Developer</h3>
              <p>HTML, CSS, React.js</p>
            </div>
            <div className="card">
              <FaServer className="card-icon" />
              <h3>Backend Developer</h3>
              <p>Node.js, Django, PHP</p>
            </div>
            <div className="card">
              <FaPencilRuler className="card-icon" />
              <h3>UI/UX Designer</h3>
              <p>Figma, Adobe XD</p>
            </div>
            <div className="card">
              <FaChartBar className="card-icon" />
              <h3>Data Analyst</h3>
              <p>Python, SQL, Excel</p>
            </div>
          </div>
        </section>

        {/* About Job Portal */}
        <section className="section quote-section">
          <h2 className="section-heading">🌟 Empowering Careers</h2>
          <div className="quote-layout">
            <div className="quote-text">
              <p>
                Our job portal connects talent with opportunity. Whether you're just starting or aiming for a senior role,
                our platform helps you upskill, get matched with curated opportunities, and grow your career efficiently.
                We aim to bridge the gap between skilled professionals and great companies. Discover your path, track your
                growth, and make your dream job a reality — all in one place.
              </p>
            </div>
            <div className="quote-image">
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" alt="Career Boost" />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section">
          <h2 className="section-heading">🧩 How It Works</h2>
          <div className="card-container">
            <div className="card">
              <FaUserPlus className="card-icon" />
              <h3>1️⃣ Register</h3>
              <p>Create an account with your details</p>
            </div>
            <div className="card">
              <FaSignInAlt className="card-icon" />
              <h3>2️⃣ Login</h3>
              <p>Access your personal dashboard</p>
            </div>
            <div className="card">
              <FaUpload className="card-icon" />
              <h3>3️⃣ Upload Resume</h3>
              <p>Upload your CV for job matching</p>
            </div>
            <div className="card">
              <FaClipboardCheck className="card-icon" />
              <h3>4️⃣ Match Resume</h3>
              <p>Smart AI matches your resume with top jobs</p>
            </div>
            <div className="card">
              <FaStar className="card-icon" />
              <h3>5️⃣ Get Your Score</h3>
              <p>Know how well your resume performs</p>
            </div>
            <div className="card">
              <FaBriefcase className="card-icon" />
              <h3>6️⃣ Find Job</h3>
              <p>Apply to top companies with confidence</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section">
          <h2 className="section-heading">🚀 Why Choose JobSage?</h2>
          <p style={{ maxWidth: '700px', textAlign: 'center', fontSize: '20px' }}>
            Trusted by thousands of students and recruiters. Build skills, apply easily, and grow your career with JobSage.
          </p>
        </section>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-section">
          <h4>About</h4>
          <p>We connect job seekers with the best opportunities to build a brighter future.</p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: support@jobsage.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
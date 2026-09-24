import React from "react";
import "./Project2.css";

function Portfolio() {
  return (
    <div className="portfolio-page">

      <nav className="navbar">
        <h2 className="logo">Sahana S</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <p className="hello">HELLO, I'M</p>

          <h1>Sahana S</h1>

          <h2>B.E CSE - Cyber Security Student</h2>

          <p>
            Passionate about Web Development,
            Cybersecurity and Programming.
          </p>

          <a href="#projects" className="hero-btn">
            View My Projects
          </a>
        </div>
      </section>

      <section id="about" className="portfolio-section">
        <h2 className="section-title">About Me</h2>

        <p>
          I am a Computer Science student interested in
          web development, cybersecurity and programming.
          I enjoy creating simple and user-friendly
          web applications using modern technologies.
        </p>
      </section>

      <section id="skills" className="portfolio-section">
        <h2 className="section-title">My Skills</h2>

        <div className="skill-list">
          <span className="skill-item">HTML</span>
          <span className="skill-item">CSS</span>
          <span className="skill-item">JavaScript</span>
          <span className="skill-item">React</span>
          <span className="skill-item">Java</span>
          <span className="skill-item">Python</span>
        </div>
      </section>

      <section id="projects" className="portfolio-section">
        <h2 className="section-title">My Projects</h2>

        <div className="project-container">

          <div className="project-card">
            <h3>FloraVita</h3>
            <p>
              Plant Growth Companion website for
              tracking plant care and growth.
            </p>
            <button>View Project</button>
          </div>

          <div className="project-card">
            <h3>Student Registration</h3>
            <p>
              React-based student registration form
              with validation.
            </p>
            <button>View Project</button>
          </div>

          <div className="project-card">
            <h3>Student Portal</h3>
            <p>
              Student portal displaying attendance,
              academic and student information.
            </p>
            <button>View Project</button>
          </div>

        </div>
      </section>

      <section id="contact" className="portfolio-section contact-section">
        <h2 className="section-title">Contact Me</h2>

        <p>Email: sahana@gmail.com</p>
        <p>Phone: 9876543210</p>

        <button className="contact-btn">
          Contact Me
        </button>
      </section>

      <footer>
        <p>© 2026 Sahana S | Portfolio</p>
      </footer>

    </div>
  );
}

export default Portfolio;
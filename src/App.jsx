import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="hero">
        <h1>Dileep Kumar Boddu</h1>
        <h3>Devops Engineer | AWS & DevOps Learner</h3>
        <p>
          Passionate about building web applications and learning cloud,
          DevOps, and modern software development technologies.
        </p>

        <div className="buttons">
          <a
            href="https://github.com/dileepkumarboddu"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </header>

      <section>
        <h2>About Me</h2>
        <p>
          I am currently pursuing B.Tech in Information Technology at Sasi
          Institute of Technology & Engineering. I have experience working with
          React, Node.js, JavaScript, Java, Python, and cloud technologies. I
          enjoy creating practical projects and continuously improving my
          technical skills.
        </p>
      </section>

      <section>
        <h2>Education</h2>
        <div className="card">
          <h3>B.Tech - Information Technology</h3>
          <p>Sasi Institute of Technology & Engineering</p>
          <p>CGPA: 8.99</p>
          <p>2023 - Present</p>
        </div>
      </section>

      <section>
        <h2>Technical Skills</h2>

        <div className="skills">
          <span>React</span>
          <span>JavaScript</span>
          <span>Node.js</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Java</span>
          <span>Python</span>
          <span>MySQL</span>
          <span>MongoDB</span>
          <span>AWS Basics</span>
          <span>Git</span>
          <span>GitHub</span>
          <span>Docker</span>
          <span>Jenkins</span>
        </div>
      </section>

      <section>
        <h2>Projects</h2>

        <div className="card">
          <h3>Student Portal</h3>
          <p>
            Developed a responsive student portal using React and deployed it
            using Firebase Hosting.
          </p>
        </div>

        <div className="card">
          <h3>Jenkins CI/CD Pipeline</h3>
          <p>
            Automated application build and deployment using Jenkins pipelines.
          </p>
        </div>

        <div className="card">
          <h3>Docker Deployment</h3>
          <p>
            Containerized web applications using Docker and deployed them
            efficiently.
          </p>
        </div>
      </section>

      <section>
        <h2>Internship Experience</h2>

        <div className="card">
          <h3>Software Development Intern</h3>
          <p>Spypro Company, Vijayawada</p>
          <p>May 2025 - June 2025</p>

          <ul>
            <li>Developed responsive web applications.</li>
            <li>Worked with React.js and JavaScript.</li>
            <li>Integrated APIs and databases.</li>
            <li>Improved website performance and usability.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Certifications</h2>

        <ul>
          <li>Python Basics - HackerRank</li>
          <li>Spypro Internship Certificate</li>
          <li>AWS Certification</li>
        </ul>
      </section>

      <section>
        <h2>Coding Profiles</h2>

        <ul>
          <li>CodeChef - 3 Star ⭐</li>
          <li>HackerRank - Solved DSA Problems</li>
        </ul>
      </section>

      <section>
        <h2>Contact</h2>

        <p>📧 boddudileepkumar151@gmail.com</p>
        <p>📱 +91 7731839919</p>
        <p>📍 Tadepalligudem, Andhra Pradesh</p>
      </section>
    </div>
  );
}

export default App;

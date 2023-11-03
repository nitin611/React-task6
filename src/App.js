import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Nitin's Portfolio</h1>
        <p>3rd-year student | C++, DSA, MERN stack</p>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>
            I'm a passionate developer with expertise in C++, Data Structures and Algorithms, and the MERN stack. I'm dedicated to creating elegant and efficient solutions to real-world problems.
          </p>
        </section>
        <section>
          <h2>Projects</h2>
          <div className="project-card">
            <h3>Project 1</h3>
            <p>Razorpay Clone</p>
            <p>Link - <a href="https://leafy-concha-0dc238.netlify.app/" target="_blank" rel="noopener noreferrer">Visit Project</a></p>
          </div>
          <div className="project-card">
            <h3>Project 2</h3>
            <p>Weather App</p>
            <p>Link - <a href="https://nitin611.github.io/Weather-app" target="_blank" rel="noopener noreferrer">Visit Project</a></p>
          </div>
        </section>
        <section>
          <h2>Contact</h2>
          <p>Email: jhanitin906@gmail.com</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/nitin-kumar-jha-8015221b8/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
        </section>
      </main>
    </div>
  );
}

export default App;

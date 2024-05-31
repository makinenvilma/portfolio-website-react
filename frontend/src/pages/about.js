import React from 'react';
import './about.css';

const About = () => {
  return (
    <div>
      <header></header>
      <main>
        <div class='about-me-box'>
          <div class='about-me-flex-container'>
            <div class='about-me-flex-container-text'>
              <h1>About Me</h1>
              <h3>This is a test.</h3>
              <p>This is another test.</p>
            </div>
            <div class='about-me-flex-container-image'>
              <img src={null} alt='Dog' />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;

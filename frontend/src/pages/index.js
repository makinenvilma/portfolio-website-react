import React from 'react';
import './index.css';

const Home = () => {
  return (
    <div>
      <header></header>
      <main>
        <div class='info-box'>
          <div class='info-flex-container'>
            <div class='info-flex-container-image'>
              <img
                src='https://source.unsplash.com/random/320x240'
                alt='Example'
              ></img>
            </div>
            <div class='info-flex-container-text'>
              <h1>A Software Developer</h1>
              <p>This is a test.</p>
              <button id='info-button'>Contact Me</button>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <p>&copy; 2024 My Portfolio</p>
      </footer>
    </div>
  );
};

export default Home;

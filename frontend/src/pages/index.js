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
                src='https://cdn.discordapp.com/attachments/902806118156357653/1224452741137432727/vikitteleva_koira-removebg-preview_1.png?ex=661d8b7a&is=660b167a&hm=c5566d3d260a5da04e618b8b7a1ebcbc3b4e16f50c47c1f3063f7a6d9a4cf8de&'
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

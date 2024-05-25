import React from 'react';
import './index.css';
import index_image from '../assets/images/index_image.png';

const Home = () => {
  return (
    <div>
      <header></header>
      <main>
        <div class='info-box'>
          <div class='info-flex-container'>
            <div class='info-flex-container-image'>
              <img src={index_image} alt='Me' />
            </div>
            <div class='info-flex-container-text'>
              <h1>A Software Developer</h1>
              <p>This is a test.</p>
              <button class='button'>Contact Me</button>
            </div>
          </div>
        </div>
        <div class='static-box'>
          <div class='static-flex-container'>
            <div class='static-flex-container-text'>
              <h1>8</h1>
              <p>Projects</p>
            </div>
            <div class='static-flex-container-text'>
              <h1>2.5</h1>
              <p>Years of experience</p>
            </div>
            <div class='static-flex-container-text'>
              <h1>657</h1>
              <p>Contributions</p>
            </div>
          </div>
        </div>
        <div class='skill-title'>
          <h2>Specialities</h2>
          <p>
            As a specialist in many fields, I bring a comprehensive skill set to
            every project I undertake ensuring thoroughness and excellence in
            every aspect of the project.
          </p>
        </div>
        <div class='skill-box'>
          <div class='skill-flex-container'>
            <div class='skill-flex-container-text'>
              <span class='dot'>
                <img
                  src='https://em-content.zobj.net/source/skype/289/laptop_1f4bb.png'
                  alt='Frontend'
                />
              </span>
              <h3>Frontend</h3>
              <p>This is a test number one.</p>
            </div>
            <div class='skill-flex-container-text'>
              <span class='dot'>
                <img
                  src='https://em-content.zobj.net/source/toss-face/330/hammer-and-wrench_1f6e0-fe0f.png'
                  alt='Backend'
                />
              </span>
              <h3>Backend</h3>
              <p>This is a test number two.</p>
            </div>
            <div class='skill-flex-container-text'>
              <span class='dot'>
                <img
                  src='https://em-content.zobj.net/source/skype/289/pen_1f58a-fe0f.png'
                  alt='UI/UX'
                />
              </span>
              <h4>UI/UX</h4>
              <p>This is a test number three.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

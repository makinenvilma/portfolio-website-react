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
              <button class='button'>Contact Me</button>
            </div>
          </div>
        </div>
        <div class='skill-title'>
          <h2>Specialities</h2>
          <p>This is an another test.</p>
        </div>
        <div class='skill-box'>
          <div class='skill-flex-container'>
            <div class='skill-flex-container-text'>
              <img
                src='https://www.emoji.co.uk/files/apple-emojis/objects-ios/596-personal-computer.png'
                alt='Example'
              />
              <h3>Frontend</h3>
              <p>This is a test number one.</p>
            </div>
            <div class='skill-flex-container-text'>
              <img
                src='https://em-content.zobj.net/source/apple/81/hammer-and-wrench_1f6e0.png'
                alt='Example'
              />
              <h3>Backend</h3>
              <p>This is a test number two.</p>
            </div>
            <div class='skill-flex-container-text'>
              <img
                src='https://www.emoji.co.uk/files/apple-emojis/objects-ios/763-lower-left-fountain-pen.png'
                alt='Example'
              />
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

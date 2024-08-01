import React from 'react';
import './index.css';
import index_dog_image from '../assets/images/index_dog_image.png';
import index_hammer_icon from '../assets/icons/index_hammer_icon.png';
import index_laptop_icon from '../assets/icons/index_laptop_icon.png';
import index_pencil_icon from '../assets/icons/index_pencil_icon.png';

const Home = () => {
  return (
    <div>
      <header></header>
      <main>
        <div class='info-box'>
          <div class='info-flex-container'>
            <div class='info-flex-container-image'>
              <img src={index_dog_image} alt='Dog' />
            </div>
            <div class='info-flex-container-text'>
              <h1>A Software Developer</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s. Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s.
              </p>
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
                <img src={index_laptop_icon} alt='Frontend' />
              </span>
              <h3>Frontend</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div class='skill-flex-container-text'>
              <span class='dot'>
                <img src={index_hammer_icon} alt='Backend' />
              </span>
              <h3>Backend</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div class='skill-flex-container-text'>
              <span class='dot'>
                <img src={index_pencil_icon} alt='UI/UX' />
              </span>
              <h4>UI/UX</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

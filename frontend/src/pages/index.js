import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import index_dog_image from '../assets/images/index_dog_image.png';

const Home = () => {
  return (
    <div>
      <header></header>
      <main>
        <div className='info-box'>
          <div className='info-flex-container'>
            <div className='info-flex-container-image'>
              <img src={index_dog_image} alt='Dog' />
            </div>
            <div className='info-flex-container-text'>
              <h1>A Software Developer</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s. Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s.
              </p>
              <Link to='/contact'>
                {' '}
                <button className='button'>Contact Me</button>
              </Link>
            </div>
          </div>
        </div>
        <div className='skill-title'>
          <h1>Specialities</h1>
          <p>One specialist for all your needs.</p>
        </div>
        <div className='skill-box'>
          <div className='skill-flex-container'>
            <div className='skill-flex-container-text'>
              <h3>Frontend</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className='skill-flex-container-text'>
              <h3>Backend</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className='skill-flex-container-text'>
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

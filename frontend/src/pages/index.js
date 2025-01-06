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
                Hello! I'm Vilma Mäkinen. I create efficient, user-friendly
                applications with a strong focus on aesthetics and clean,
                maintainable code. I believe that great software isn't just
                about functionality - it’s also about how it looks and feels.
                Whether working on frontend interfaces or backend systems, I’m
                dedicated to building solutions that are both elegant and
                robust.
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
                Crafting interfaces with HTML, CSS, and JavaScript using modern
                frameworks.
              </p>
            </div>
            <div className='skill-flex-container-text'>
              <h3>Backend</h3>
              <p>
                Building secure systems using various languages and database
                technologies.
              </p>
            </div>
            <div className='skill-flex-container-text'>
              <h3>UI/UX</h3>
              <p>
                Designing user-friendly experiences and prototypes with
                accessibility in mind.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

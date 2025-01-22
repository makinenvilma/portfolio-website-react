import React from 'react';
import './contact.css';
import contact_dog_banner from '../assets/images/contact_dog_banner.png';

const Contact = () => {
  return (
    <div>
      <div class='header'>
        <img src={contact_dog_banner} alt='Banner' />
      </div>
      <main>
        <div class='contact-title'>
          <h1>Contact</h1>
          <p>Let's start our journey.</p>
        </div>
        <div class='contact-box'>
          <div class='contact-flex-container'>
            <div class='contact-flex-container-text'>
              <h3>LinkedIn</h3>
              <p>Get connected with me.</p>
              <div class='contact-flex-container-link'>
                <p>
                  <a href='http://linkedin.com/in/vilma-m%C3%A4kinen-71027424b' target='_blank' rel='noopener noreferrer'>
                    LinkedIn <i class='arrow right'></i>
                  </a>
                </p>
              </div>
            </div>
            <div class='contact-flex-container-text'>
              <h3>GitHub</h3>
              <p>Check out my projects.</p>
              <div class='contact-flex-container-link'>
                <p>
                  <a href='http://github.com/makinenvilma' target='_blank' rel='noopener noreferrer'>
                    GitHub <i class='arrow right'></i>
                  </a>
                </p>
              </div>
            </div>
            <div class='contact-flex-container-text'>
              <h3>Email</h3>
              <p>Hit me with a question.</p>
              <div class='contact-flex-container-link'>
                <p>
                  <a href='mailto:vilma.makinen@tuni.fi'>
                    Email <i class='arrow right'></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;

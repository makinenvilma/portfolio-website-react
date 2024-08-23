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
              <p>This is a test number one.</p>
              <div class='contact-flex-container-link'>
                <p>
                  LinkedIn <i class='arrow right'></i>
                </p>
              </div>
            </div>
            <div class='contact-flex-container-text'>
              <h3>GitHub</h3>
              <p>This is a test number two.</p>
              <div class='contact-flex-container-link'>
                <p>
                  GitHub <i class='arrow right'></i>
                </p>
              </div>
            </div>
            <div class='contact-flex-container-text'>
              <h3>Email</h3>
              <p>This is a test number three.</p>
              <div class='contact-flex-container-link'>
                <p>
                  Email <i class='arrow right'></i>
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

import React from 'react';
import './contact.css';
import contact_test_banner from '../assets/images/contact_test_banner.png';

const Contact = () => {
  return (
    <div>
      <div class='header'>
        <img src={contact_test_banner} alt='Header' />
      </div>
      <main>
        <div class='contact-title'>
          <h1>Contact Me</h1>
          <p>
            Don't be afraid to get touch with me for any queries,
            collaborations, or simply to say hello! I'm always happy to chat.
          </p>
        </div>
        <div class='contact-box'>
          <div class='contact-flex-container'>
            <div class='contact-flex-container-text'>
              <h3>LinkedIn</h3>
              <p>This is a test number one.</p>
              <div class='contact-flex-container-link'>
                <p>
                  Linkedin <i class='arrow right'></i>
                </p>
              </div>
            </div>
            <div class='contact-flex-container-text'>
              <h3>GitHub</h3>
              <p>This is a test number two.</p>
              <div class='contact-flex-container-link'>
                <p>
                  Github <i class='arrow right'></i>
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

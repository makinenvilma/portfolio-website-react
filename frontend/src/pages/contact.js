import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div>
      <header></header>
      <main>
        <div class='contact-title'>
          <h2>Contact Me</h2>
          <p>This is a test.</p>
        </div>
        <div class='contact-box'>
          <div class='contact-flex-container'>
            <div class='contact-flex-container-text'>
              <h3>Linkedin</h3>
              <p>This is a test number one.</p>
              <div class='contact-flex-container-link'>
                <p>
                  Linkedin <i class='arrow right'></i>
                </p>
              </div>
            </div>
            <div class='contact-flex-container-text'>
              <h3>Github</h3>
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

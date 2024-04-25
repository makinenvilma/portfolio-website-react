import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div>
      <div class='header'>
        <img
          src='https://cdn.discordapp.com/attachments/1083357483764039681/1233050406624432230/Untitled_1.png?ex=662baf2d&is=662a5dad&hm=d9838bdee16dbe109e8eb9eac5fdfc6b444e528411d3fc7b1e012a628a8f00eb&'
          alt='Header'
        ></img>
      </div>
      <main>
        <div class='contact-title'>
          <h2>Contact Me</h2>
          <p>This is a test.</p>
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

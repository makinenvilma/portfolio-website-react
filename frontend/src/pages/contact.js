import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div>
      <div class='header'>
        <img
          src='https://cdn.discordapp.com/attachments/1005810469275193476/1233104643769499770/Untitled_2.png?ex=662be1b1&is=662a9031&hm=1ffe0a009c0ab6048c67874bbd6a78ca5077a24d0cd9fcdc184d39a757ee7339&'
          alt='Header'
        ></img>
      </div>
      <main>
        <div class='contact-title'>
          <h1>Contact Me</h1>
          <p>
            Don't be afraid to get touch with me for any queries,
            collaborations, or simply to say hello! I am always happy to help.
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
        <div class='text-box'>
          <div class='text-flex-container'>
            <div class='text-flex-container-text'>
              <p>Test1</p>
            </div>
            <div
              class='text-flex-container-separator'
              aria-hidden='true'
              role='presentation'
            ></div>
            <div class='text-flex-container-text'>
              <p>Test2</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;

import React from 'react';
import styles from './Footer.module.css';
import footer_linkedin_icon from '../../assets/icons/footer_linkedin_icon.png';
import footer_github_icon from '../../assets/icons/footer_github_icon.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.textBox}>
        <div className={styles.textFlexContainer}>
          <div className={styles.textFlexContainerText}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div className={styles.textFlexContainerText}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.socialMediaBox}>
        <div className={styles.socialMediaFlexContainer}>
          <div className={styles.infoFlexContainerIcon}>
            <img src={footer_linkedin_icon} alt='LinkedIn' />
          </div>
          <div className={styles.infoFlexContainerIcon}>
            <img src={footer_github_icon} alt='GitHub' />
          </div>
        </div>
      </div>
      <p>&copy; 2024 Vilma Mäkinen. All rights reserved. </p>
    </footer>
  );
};

export default Footer;

import React from 'react';
import styles from './Footer.module.css';
import footer_linkedin_icon3 from '../../assets/icons/footer_linkedin_icon3.png';
import footer_github_icon3 from '../../assets/icons/footer_github_icon3.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialMediaBox}>
        <div className={styles.socialMediaFlexContainer}>
          <div className={styles.infoFlexContainerIcon}>
            <a href="http://linkedin.com/in/vilma-m%C3%A4kinen-71027424b" target="_blank" rel="noopener noreferrer">
              <img src={footer_linkedin_icon3} alt='LinkedIn' />
            </a>
          </div>
          <div className={styles.infoFlexContainerIcon}>
            <a href="http://github.com/makinenvilma" target="_blank" rel="noopener noreferrer">
              <img src={footer_github_icon3} alt='GitHub' />
            </a>
          </div>
        </div>
      </div>
      <p>2025 Vilma Mäkinen. All rights reserved. </p>
    </footer>
  );
};

export default Footer;

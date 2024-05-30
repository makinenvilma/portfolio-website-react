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
            <img src={footer_linkedin_icon3} alt='LinkedIn' />
          </div>
          <div className={styles.infoFlexContainerIcon}>
            <img src={footer_github_icon3} alt='GitHub' />
          </div>
        </div>
      </div>
      <p>2024 Vilma Mäkinen. All rights reserved. </p>
    </footer>
  );
};

export default Footer;

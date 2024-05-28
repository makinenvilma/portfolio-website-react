import React from 'react';
import styles from './Footer.module.css';
import footer_linkedin_icon from '../../assets/icons/footer_linkedin_icon.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['social-media-box']}>
        <div className={styles['social-media-flex-container']}>
          <div className={styles['info-flex-container-icon']}>
            <img src={footer_linkedin_icon} alt='LinkedIn' />
          </div>
          <div className={styles['info-flex-container-icon']}>
            <img src={footer_linkedin_icon} alt='LinkedIn' />
          </div>
          <div className={styles['info-flex-container-icon']}>
            <img src={footer_linkedin_icon} alt='LinkedIn' />
          </div>
        </div>
      </div>
      <p>&copy; 2024 Vilma Mäkinen. All rights reserved. </p>
    </footer>
  );
};

export default Footer;

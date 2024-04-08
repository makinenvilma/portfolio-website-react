import React from 'react';
import styles from './Footer.module.css'; // Import the CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {' '}
      {/* Assigning footer class */}
      <p>&copy; 2024 Vilma Mäkinen. All rights reserved. </p>
    </footer>
  );
};

export default Footer;

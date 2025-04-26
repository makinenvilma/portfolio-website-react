import React, { useState } from 'react';
import styles from './Marquee.module.css';

const Marquee = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <div className={styles.marqueeContainer}>
      <div className={`${styles.toggleSwitch} ${darkMode ? styles.dark : ''}`} onClick={toggleDarkMode}>
        <div className={`${styles.slider} ${darkMode ? styles.active : ''}`}></div>
      </div>
    </div>
  );
};

export default Marquee;

import React from 'react';
import styles from './Marquee.module.css';

const Marquee = () => {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeContent}>
        ! ! ! This opportunity won't last forever - reach out TODAY and let's
        make great things happen ! ! !
      </div>
    </div>
  );
};

export default Marquee;

import React from 'react';
import styles from './Divider.module.css';

const Divider = () => {
  return (
    <div className={styles.dividertBox}>
      <div className={styles.dividerFlexContainer}>
        <div className={styles.dividerFlexContainerText}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
        <div className={styles.dividerFlexContainerText}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Divider;

import React from 'react';
import styles from './PortfolioHeader.module.css';

const PortfolioHeader = () => {
  return (
    <div>
      <div id={styles.infoContainer}>
        <h1 id={styles.firstName}>Alex</h1>
        <h1 id={styles.lastName}>Miserandino</h1>
        <h2 id={styles.title}>Junior Developer</h2>
        <a href="#" id={styles.resumeLink}>
          Resume
        </a>
      </div>
    </div>
  );
};

export default PortfolioHeader;

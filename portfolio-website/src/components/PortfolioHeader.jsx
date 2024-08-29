import React from 'react';
import styles from './PortfolioHeader.module.css';

const PortfolioHeader = () => {
  return (
    <div>
      <div id={styles.infoContainer}>
        <h1 id={styles.firstName}>Alex</h1>
        <h1 id={styles.lastName}>Miserandino</h1>
        <h2 id={styles.title}>Junior Developer</h2>
        <a
          href="https://drive.google.com/file/d/1xwTfOOeUZb4cSBqO7xR91AJ5mY75r_Ex/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          id={styles.resumeLink}
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default PortfolioHeader;

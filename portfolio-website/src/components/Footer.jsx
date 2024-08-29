import React from 'react'
import styles from './Footer.module.css'
import {ReactOriginal} from "devicons-react";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <p className={styles.footerText}>Website Made with React <span><ReactOriginal size="15" /></span> by Alex Miserandino</p>
    </div>
  );
}

export default Footer
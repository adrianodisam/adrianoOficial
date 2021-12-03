import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,32L288,256L576,160L864,288L1152,128L1440,96L1440,320L1152,320L864,320L576,320L288,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Footer;

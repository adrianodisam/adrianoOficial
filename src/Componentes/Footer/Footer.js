import React from 'react';
import styles from './Footer.module.css';
import Github from '../Svgs/Github';
import Email from '../Svgs/Email';
import Linkedin from '../Svgs/Linkedin';

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <span>Desenvolvido por Adriano Sampaio</span>
      <div className={styles.redeSociais}>
        <a href="https://github.com/adrianodisam">
          <Github />
        </a>
        <a href="https://www.linkedin.com/in/adriano-silva-sampaio/">
          <Linkedin />
        </a>
        <a href="mailto:adrianodisam@gmail.com">
          <Email />
        </a>
      </div>
    </div>
  );
};

export default Footer;

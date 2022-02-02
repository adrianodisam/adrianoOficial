import styles from '../Contato/Contato.module.css';
import Email from '../Svgs/Email';
import Linkedin from '../Svgs/Linkedin';
import React from 'react';

const Contato = () => {
  return (
    <div id="Contato" className={styles.Contato}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
        <path
          fill="#1c1c1c"
          fill-opacity="1"
          d="M0,32L80,42.7C160,53,320,75,480,85.3C640,96,800,96,960,122.7C1120,149,1280,203,1360,229.3L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
      <h1>Contato</h1>
      <section className={styles.ContatoRedeSociais}>
        <a href="https://www.linkedin.com/in/adriano-silva-sampaio/">
          <Linkedin />
        </a>
        <a href="mailto:adrianodisam@gmail.com">
          <Email />
        </a>
      </section>
    </div>
  );
};

export default Contato;

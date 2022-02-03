import styles from '../Contato/Contato.module.css';
import Email from '../Svgs/Email';
import Linkedin from '../Svgs/Linkedin';
import React from 'react';

const Contato = () => {
  return (
    <div id="Contato" className={styles.Contato}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#1c1c1c"
          fill-opacity="1"
          d="M0,160L1440,32L1440,0L0,0Z"
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

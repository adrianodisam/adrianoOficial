import React from 'react';
import styles from './Banner.module.css';

const Banner = () => {
  return (
    <>
      <section className={styles.banner}>
        <h1>Adriano</h1>
        <h2>Sampaio</h2>
        <h3> Desenvolvedor Front-End</h3>
        <a
          className={styles.a}
          href="https://www.linkedin.com/in/adriano-silva-sampaio/"
        >
          Fale Comigo
        </a>
      </section>
    </>
  );
};

export default Banner;

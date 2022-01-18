import React from 'react';
import styles from './Banner.module.css';

const Banner = () => {
  return (
    <>
      <section className={styles.banner}>
        <section>
          <h1>Adriano</h1>
          <h2>Sampaio </h2>
          <h3 className="animationpiscar">Desenvolvedor Front-End</h3>
        </section>

        <div>
          <a
            className={styles.a}
            href="https://www.linkedin.com/in/adriano-silva-sampaio/"
          >
            Fale Comigo
          </a>
        </div>
      </section>
    </>
  );
};

export default Banner;

import React from 'react';
import styles from './Banner.module.css';
import img from '../img/Adrianofoto-removebg-preview.png';

const Banner = () => {
  return (
    <div className={styles.Banner}>
      <img className={styles.img2} alt="foto" src={img} />
      <div className={styles.div}>
        <h1>Adriano</h1>
        <h2>Sampaio</h2>
        <h3> Desenvolvedor Front-End</h3>

        <button className={styles.ButtonBanner}>
          <a
            className={styles.a}
            href="https://www.linkedin.com/in/adriano-silva-sampaio/"
          >
            Fale Comigo
          </a>
        </button>
      </div>
    </div>
  );
};

export default Banner;

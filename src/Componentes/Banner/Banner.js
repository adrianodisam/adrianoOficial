import React from 'react';
import styles from './Banner.module.css';
import img from '../img/Adrianofoto-removebg-preview.png';
import img1 from '../img/Animated Shape.svg';

const Banner = () => {
  return (
    <>
      <div
        className={styles.Banner}
        style={{
          backgroundImage: `url("${img1}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <img className={styles.img2} alt="foto" src={img} />
        <div className={styles.div}>
          <h1>Adriano</h1>
          <h2>Sampaio</h2>
          <h3> Desenvolvedor Front-End</h3>

          <a
            className={styles.a}
            href="https://www.linkedin.com/in/adriano-silva-sampaio/"
          >
            Fale Comigo
          </a>
        </div>
      </div>
    </>
  );
};

export default Banner;

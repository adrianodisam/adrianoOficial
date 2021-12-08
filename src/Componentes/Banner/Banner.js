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

        <span>Desenvolvedor Web </span>
        <h3>Front-End</h3>
        <button className={styles.ButtonBanner}>Fale Comigo</button>
      </div>
    </div>
  );
};

export default Banner;

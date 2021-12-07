import React from 'react';
import styles from './Banner.module.css';
import img from '../img/Adrianofoto-removebg-preview.png';
import img1 from '../img/HYPER_20200408_173014_null-removebg-preview.png';
const Banner = () => {
  return (
    <div className={styles.Banner}>
      <img className={styles.img2} src={img} />
      <div className={styles.div}>
        <button className={styles.ButtonBanner}>Fale Comigo</button>
      </div>

      <img className={styles.img} src={img1} />
    </div>
  );
};

export default Banner;

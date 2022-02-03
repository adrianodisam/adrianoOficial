import React from 'react';
import useMedia from '../../Hooks/useMedia';
import styles from './Banner.module.css';

const Banner = () => {
  const bannerResponsivo = useMedia('max-width: 40rem');
  return (
    <>
      <section className={styles.banner}>
        <section
          className={`${bannerResponsivo ? styles.banner : styles.bannerRespo}`}
        >
          <h1 className=" animap">Adriano Sampaio</h1>
          <h3 className="animationpiscar">Desenvolvedor Front-End</h3>{' '}
          <div className=" bounce-top">
            <a
              className={styles.a}
              href="https://www.linkedin.com/in/adriano-silva-sampaio/"
            >
              Fale Comigo
            </a>
          </div>
        </section>
      </section>
    </>
  );
};

export default Banner;

import React from 'react';
import Banner from '../Banner/Banner';
import Tecnologias from '../Tecnologias/Tecnologias';
import styles from './Container.module.css';

const Container = () => {
  return (
    <div className={styles.Container}>
      <Banner />
      <Tecnologias />
    </div>
  );
};

export default Container;

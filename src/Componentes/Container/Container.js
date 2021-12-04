import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Menu from '../Header/Menu';
import Tecnologias from '../Tecnologias/Tecnologias';
import styles from './Container.module.css';

const Container = () => {
  return (
    <div className={styles.Container}>
      <Menu />
      <Banner />
      <Tecnologias />
      <Footer />
    </div>
  );
};

export default Container;

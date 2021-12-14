import React from 'react';

import Banner from '../Banner/Banner';
import Contato from '../Contato/Contato';
import Footer from '../Footer/Footer';
import Menu from '../Header/Menu';
import Projetos from '../Projetos/Projetos';
import Sobre from '../Sobre/Sobre';
import Tecnologias from '../Tecnologias/Tecnologias';
import styles from './Container.module.css';

const Container = () => {
  return (
    <div className={styles.Container}>
      <Menu />
      <Banner />
      <Tecnologias />
      <Projetos />
      <Sobre />
      <Contato />
      <Footer />
    </div>
  );
};

export default Container;

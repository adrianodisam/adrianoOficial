import React from 'react';
import useMedia from '../../Hooks/useMedia';

import styles from './Menu.module.css';

const Menu = () => {
  const [ativo, setAtivo] = React.useState(false);
  const mobile = useMedia('(max-width: 40rem)');
  const ToogleMode = () => {
    setAtivo(!ativo);
  };
  return (
    <div className={styles.Container}>
      {mobile && (
        <button
          className={`${styles.mobileButton} ${
            ativo && styles.mobileButtonAtivo
          }`}
          aria-label="Menu"
          onClick={ToogleMode}
        ></button>
      )}
      <ul
        className={`${mobile ? styles.ulMobilestyle : styles.ulMobile} ${
          ativo && styles.ulMobileAtivo
        }`}
      >
        <li>Sobre</li>
        <li>Tecnologias</li>
        <li>Projetos</li>
        <li>Contato</li>
      </ul>
    </div>
  );
};

export default Menu;

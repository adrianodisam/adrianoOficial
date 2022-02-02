import React from 'react';
import { Link } from 'react-scroll';
import useMedia from '../../Hooks/useMedia';

import styles from './Menu.module.css';

const Menu = () => {
  const [ativo, setAtivo] = React.useState(false);
  const mobile = useMedia('(max-width: 40rem)');
  const ToogleMode = () => {
    setAtivo(!ativo);
  };
  return (
    <div
      onClick={() => {
        setAtivo(!ativo);
      }}
      className={`${mobile ? styles.Container : styles.ContainerMobile}`}
    >
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
        <Link
          to="Sobre"
          spy={true}
          smooth={true}
          offset={90}
          duration={1000}
          className={`${mobile ? styles.linkStyle : styles.ulMobileLink} `}
        >
          Sobre
        </Link>

        <Link
          to="Tecnologias"
          spy={true}
          smooth={true}
          offset={90}
          duration={1000}
          className={`${mobile ? styles.linkStyle : styles.ulMobileLink} `}
        >
          Tecnologias
        </Link>
        <Link
          to="Projetos"
          spy={true}
          smooth={true}
          offset={90}
          duration={1000}
          className={`${mobile ? styles.linkStyle : styles.ulMobileLink}`}
        >
          Projetos
        </Link>
        <Link
          to="Contato"
          spy={true}
          smooth={true}
          offset={90}
          duration={1000}
          className={`${mobile ? styles.linkStyle : styles.ulMobileLink}`}
        >
          Contato
        </Link>
      </ul>
    </div>
  );
};

export default Menu;

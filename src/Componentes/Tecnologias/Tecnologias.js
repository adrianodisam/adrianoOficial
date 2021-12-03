import React from 'react';
import useMedia from '../../Hooks/useMedia';
import styles from './Tecnologias.module.css';
const tec = ['javaScrip', 'React', 'Node', 'Css', 'Html'];

function Tecnologias() {
  const mobile = useMedia('(max-width: 40rem)');
  return (
    <section
      className={`${
        mobile ? styles.sectionTecnologiasMobyle : styles.sectionTecnologias
      }`}
    >
      {tec.map((tecno) => (
        <div className={`${mobile ? styles.divTecMobyle : styles.divTec}`}>
          <p className={styles.divTec}>{tecno}</p>
        </div>
      ))}
    </section>
  );
}

export default Tecnologias;

import React from 'react';
import useMedia from '../../Hooks/useMedia';
import CssSvg from './CssSvg';
import HtmlSvg from './HtmlSvg';

import NodeSvg from './NodeSvg';
import ReactSvg from './ReactSvg';

import styles from './Tecnologias.module.css';
const tec = ['javaScrip', 'React', 'Node', 'Css', 'Html'];
const svgs = [<NodeSvg />, <ReactSvg />, <HtmlSvg />, <CssSvg />];
function Tecnologias() {
  const mobile = useMedia('(max-width: 40rem)');
  return (
    <section
      className={`${
        mobile ? styles.sectionTecnologiasMobyle : styles.sectionTecnologias
      }`}
    >
      {svgs.map((svg) => (
        <div className={styles.svgs}>{svg}</div>
      ))}
    </section>
  );
}

export default Tecnologias;

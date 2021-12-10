import React from 'react';
import useMedia from '../../Hooks/useMedia';
import styles from './Tecnologias.module.css';
import javaScripSvg from '../img/svgs/javascript-svgrepo-com.svg';
import reactSvg from '../img/svgs/react-svgrepo-com.svg';
import nodeSvg from '../img/svgs/node-svgrepo-com.svg';
import htmlSvg from '../img/svgs/html-svgrepo-com.svg';
import cssSvg from '../img/svgs/css-svgrepo-com.svg';

const tec = [
  {
    tecnologia: 'Javascript',
    svg: javaScripSvg,
  },
  {
    tecnologia: 'React',
    svg: reactSvg,
  },
  {
    tecnologia: 'Node',
    svg: nodeSvg,
  },
  {
    tecnologia: 'Html',
    svg: htmlSvg,
  },
  {
    tecnologia: 'Css',
    svg: cssSvg,
  },
];

function Tecnologias() {
  const mobile = useMedia('(max-width: 40rem)');
  return (
    <>
      <div className={styles.cabec}>
        {' '}
        <h1>Tecnologias</h1>
      </div>

      <section
        className={`${
          mobile ? styles.sectionTecnologiasMobyle : styles.sectionTecnologias
        }`}
      >
        {tec.map(({ tecnologia, svg }) => (
          <div className={`${mobile ? styles.divSvgMobile : styles.divSvg} `}>
            <img alt={tecnologia} className={styles.Svgs} src={svg} />
            <div className={styles.psvg}>
              <p>{tecnologia}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Tecnologias;

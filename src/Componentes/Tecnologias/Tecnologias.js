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
      <section
        id="Tecnologias"
        className={`${
          mobile ? styles.sectionTecnologiasMobyle : styles.sectionTecnologias
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 322">
          <path
            fill="#1c1c1c"
            fill-opacity="1"
            d="M0,0L1440,256L1440,0L0,0Z"
          ></path>
        </svg>
        <div className={styles.cabec}>
          <h1>Conhecimentos</h1>
        </div>
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

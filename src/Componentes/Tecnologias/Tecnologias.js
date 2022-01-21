import React from 'react';
import useMedia from '../../Hooks/useMedia';
import styles from './Tecnologias.module.css';
import javaScripSvg from '../img/svgs/javascript-svgrepo-com.svg';
import reactSvg from '../img/svgs/react-svgrepo-com.svg';
import nodeSvg from '../img/svgs/node-svgrepo-com.svg';
import htmlSvg from '../img/svgs/html.svg';
import cssSvg from '../img/svgs/css.svg';

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
  const [esfeito, setEfeitp] = React.useState(false);
  const eleme = React.useRef();

  const mobile = useMedia('(max-width: 40rem)');
  React.useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entries) => entries.isIntersecting)) {
        setEfeitp(true);
      } else {
        setEfeitp(false);
      }
    });

    intersectionObserver.observe(eleme.current);

    return () => intersectionObserver.disconnect();
  }, [esfeito]);
  return (
    <>
      <section id="Tecnologias" className={styles.container}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#1c1c1c"
            ref={eleme}
            fill-opacity="1"
            d="M0,0L1440,96L1440,0L0,0Z"
          ></path>
        </svg>

        <section className={styles.cabec}>
          <h1 className={`${esfeito && 'tracking-in-expand-fwd-top'}`}>
            Skills
          </h1>
        </section>
        <section
          className={`${
            mobile ? styles.tecnologiasMobile : styles.tecnologias
          } `}
        >
          {tec.map(({ tecnologia, svg }) => (
            <section
              className={`${mobile ? styles.divSvgMobile : styles.divSvg} `}
            >
              <img
                ref={eleme}
                className={`${esfeito && 'tecnologias'} `}
                alt={tecnologia}
                src={svg}
              />

              <section className={styles.psvg}>
                <p className={`${esfeito && 'tecnologias'}`}>{tecnologia}</p>
              </section>
            </section>
          ))}
        </section>
        <div></div>
      </section>
    </>
  );
}

export default Tecnologias;

import React from 'react';
import useMedia from '../../Hooks/useMedia';
import styles from './Tecnologias.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import JavascriptSvg from '../Svgs/JavascriptSvg';
import CssSvg from '../Svgs/CssSvg';
import HtmlSvg from '../Svgs/HtmlSvg';
import ReactSvg from '../Svgs/ReactSvg';
import NodeSvg from '../Svgs/NodeSvg';

function Tecnologias() {
  const [esfeito, setEfeitp] = React.useState(false);
  const eleme = React.useRef();
  const mobile = useMedia('(max-width: 40rem)');
  React.useEffect(() => {
    Aos.init();
  }, []);
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
            fill="#0e091b"
            ref={eleme}
            fill-opacity="1"
            d="M0,0L1440,96L1440,0L0,0Z"
          ></path>
        </svg>

        <section ref={eleme} className={styles.cabec}>
          <h1 className={`${esfeito && 'tracking-in-expand-fwd-top'}`}>
            Skills
          </h1>
        </section>
        <section
          className={`${
            mobile ? styles.tecnologiasMobile : styles.tecnologias
          } `}
        >
          <section
            className={`${mobile ? styles.divSvgMobile : styles.divSvg} `}
          >
            <section
              className={`${
                mobile ? styles.TecnologiasMobile : styles.Tecnologias
              }`}
            >
              <section data-aos="fade-right" data-aos-duration="2000">
                <HtmlSvg />
                <p>Html</p>
              </section>
              <section data-aos="fade-right" data-aos-duration="2000">
                {' '}
                <JavascriptSvg />
                <p>JavaScrip</p>
              </section>

              <section data-aos="fade-right" data-aos-duration="2000">
                <ReactSvg />
                <p>React</p>
              </section>

              <section data-aos="fade-right" data-aos-duration="2000">
                <CssSvg />
                <p>Css</p>
              </section>
              <section data-aos="fade-right" data-aos-duration="2000">
                <NodeSvg />
                <p>Node</p>
              </section>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}

export default Tecnologias;

import styles from '../Sobre/Sobre.module.css';
import React from 'react';
import Luz from '../Svgs/Luz';
import foto from '../img/fotoAdrianoSobre.jpg';

const Sobre = () => {
  const paragrafo = React.useRef();
  const [elemento, setElemento] = React.useState(false);
  function animar(ref, estado) {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entries) => entries.isIntersecting)) {
        setElemento(true);
      } else {
        setElemento(false);
      }
    });
    intersectionObserver.observe(paragrafo.current);

    return () => intersectionObserver.disconnect();
  }

  React.useEffect(() => {
    animar(paragrafo, elemento);
  }, [elemento]);

  return (
    <>
      <section id="Sobre" className={styles.Sobre}>
        <h1 className={`${elemento && 'tracking-in-expand-fwd-top'}`}>Sobre</h1>
        <Luz className={elemento && `${styles.svgMode}`} />
        <section className={styles.geral}>
          <section className={styles.geralP}>
            <p ref={paragrafo} className={`${elemento && 'animap'}`}>
              Nascido no interior da Bahia na cidade de Belo Campo vim para São
              Paulo aos 19 anos Com intuito de poder ter mais oportunidades,
              sempre apaixonado por tecnologia e de saber como funciona por traz
              de todas as coisas conheci a programação e fiquei impressionado
              com as possibilidades de poder desenvolver ferramentas e resolver
              problemas do meu dia dia. Dentre as maiores conquistas está minha
              graduação de Ciência da Computação na Universidade Paulista -Unip
              em dezembro de 2021 finalizando o ciclo com muita dedicação e
              gratidão por mais um passo na minha carreira e desenvolvimento
              profissional.
            </p>
          </section>
          <section className={styles.sectionImg}>
            <img
              className={` ${elemento && 'animap'}`}
              src={foto}
              alt="Foto Adriano"
            />
          </section>
        </section>
      </section>
    </>
  );
};

export default Sobre;

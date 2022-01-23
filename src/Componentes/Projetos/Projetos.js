import React from 'react';
import styles from '../Projetos/Projetos.module.css';
import svggithub from '../img/github.png';
import deceMania from '../img/doceMania.png';
import fundo from '../img/kisspng-wire-idea-wiring-diagram-hand-painted-curve-bulb-vector-5a8f42e8c79d59.9307899915193382168176.png';
import fundo1 from '../img/github.png';

const criacoes = [
  {
    nome: 'Site',
    url: 'https://lannydocemania.com.br/',
    img: deceMania,
    texto:
      'Existem muitas variações disponíveis de passagens de Lorem Ipsum, mas a maioria sofreu algum tipo de alteração, sefewefwefwefa por inserção de passagens com humor.',
  },
  {
    nome: 'programa',
    url: 'https://lannydocemania.com.br/',
    img: fundo1,
    texto:
      'Existem muitas variações disponíveis de passagens de Lorem Ipsum, mas a maioria sofreu algum tipo de alteração, seja por insdfdfwdfwfweweweerção de passagens com humor.',
  },
  {
    nome: 'sistema',
    url: 'https://lannydocemania.com.br/',
    img: fundo,
    texto:
      'Existem muitas variações disponíveis de passagens de Lorem Ipsum, mas a maioria sofreu algum tipo de alteração, seja por inserção dff  de passagens com humor.',
  },
];
const Projetos = () => {
  const [dados, setDados] = React.useState([]);
  const [projetos, setProjetos] = React.useState(0);
  const [anima, setAnima] = React.useState(false);
  const eleme = React.useRef();
  const [proximo, setProximo] = React.useState(0);

  React.useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entries) => entries.isIntersecting)) {
        setAnima(true);
      } else {
        setAnima(false);
      }
    });
    intersectionObserver.observe(eleme.current);

    return () => intersectionObserver.disconnect();
  }, [anima]);

  React.useEffect(() => {
    if (anima === true) {
      fetch('https://api.github.com/users/adrianodisam/repos')
        .then((res) => res.json())
        .then((data) => setDados(data));
    }
  }, [anima]);
  React.useEffect(() => {
    for (let i = 0; i <= dados.length; i++) {
      setTimeout(() => {
        setProjetos(i);
      }, 90 * i);
    }
  }, [dados]);

  function next() {
    if (proximo < criacoes.length - 1) setProximo(proximo + 1);
  }
  function voltar() {
    if (proximo !== 0) {
      setProximo(proximo - 1);
    }
  }

  return (
    <div className={styles.Projetos} id="Projetos">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
        <path
          fill="#1c1c1c"
          fill-opacity="1"
          d="M0,96L1440,0L1440,0L0,0Z"
        ></path>
      </svg>
      <div className={styles.projetosMomento}>
        <h1 className={`${anima && 'tracking-in-expand-fwd-top'}`}>
          <span>{projetos}</span> Projetos
        </h1>
        <p className={`${anima && 'tracking-in-expand-fwd-top'}`}>
          Até o momento no Github
        </p>
        <img
          ref={eleme}
          className={`${styles.svgGithub} ${anima && 'bounce-top '}`}
          src={svggithub}
          alt="svggithub"
        />
      </div>
      <div className={`${styles.container}`}>
        <div>
          <div className={styles.texto}>
            <h2 onClick={next}>{criacoes[proximo].nome}</h2>
          </div>
          <img
            className={`${styles.criacao}  ${anima && 'animap'}`}
            src={criacoes[proximo].img}
            alt="svggithub"
          />
        </div>
        <section className={styles.SectionTexto}>
          <p>{criacoes[proximo].texto}</p>{' '}
          <section>
            <button onClick={next}>Prpximo</button>
            <button onClick={voltar}>Voltar</button>
          </section>
        </section>
      </div>

      <svg id="Sobre" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 310">
        <path
          fill="#1c1c1c"
          fill-opacity="1"
          d="M0,96L1440,320L1440,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Projetos;

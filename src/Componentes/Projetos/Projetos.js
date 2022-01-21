import React from 'react';
import styles from '../Projetos/Projetos.module.css';
import svggithub from '../img/github.png';
import deceMania from '../img/doceMania.png';

const criacoes = [
  {
    nome: 'Site',
    url: 'https://lannydocemania.com.br/',
    img: deceMania,
    texto:
      'Existem muitas variações disponíveis de passagens de Lorem Ipsum, mas a maioria sofreu algum tipo de alteração, seja por inserção de passagens com humor.',
  },
  {
    nome: 'Site',
    url: 'https://lannydocemania.com.br/',
    img: deceMania,
    texto:
      'Existem muitas variações disponíveis de passagens de Lorem Ipsum, mas a maioria sofreu algum tipo de alteração, seja por inserção de passagens com humor.',
  },
  {
    nome: 'Site',
    url: 'https://lannydocemania.com.br/',
    img: deceMania,
    texto:
      'Existem muitas variações disponíveis de passagens de Lorem Ipsum, mas a maioria sofreu algum tipo de alteração, seja por inserção de passagens com humor.',
  },
];
const Projetos = () => {
  const [dados, setDados] = React.useState([]);
  const [projetos, setProjetos] = React.useState(0);
  const [anima, setAnima] = React.useState(false);
  const eleme = React.useRef();

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

  return (
    <div className={styles.Projetos} id="Projetos">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
        <path
          fill="#0e091b"
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

      {criacoes.map((criacao) => (
        <div className={`${styles.container}`}>
          <div className={styles.texto}>
            <h2>{criacao.nome}</h2>
          </div>
          <div>
            <img
              className={`${styles.criacao}  ${anima && 'animap'}`}
              src={criacao.img}
              alt="svggithub"
            />
          </div>
          <p>{criacao.texto}</p>
        </div>
      ))}

      <svg id="Sobre" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 310">
        <path
          fill="#0e091b"
          fill-opacity="1"
          d="M0,96L1440,320L1440,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Projetos;

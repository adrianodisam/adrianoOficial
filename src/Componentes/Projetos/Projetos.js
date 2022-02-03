import React from 'react';
import styles from '../Projetos/Projetos.module.css';
import svggithub from '../img/github.png';

const criacoes = [
  {
    nome: 'Site',
    url: 'https://lannydocemania.com.br/',
    img: 'Primeiro',
    texto:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
  },
  {
    nome: 'programa',
    url: 'https://lannydocemania.com.br/',
    img: 'segundo',
    texto:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
  },
  {
    nome: 'sistema',
    url: 'https://lannydocemania.com.br/',
    img: 'Terceiro',
    texto:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
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
    if (proximo < criacoes.length - 1) {
      setProximo(proximo + 1);
    }
  }
  function voltar() {
    if (proximo !== 0) {
      setProximo(proximo - 1);
    }
  }

  return (
    <div className={styles.Projetos} id="Projetos">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#1c1c1c"
          fill-opacity="1"
          d="M0,64L1440,256L1440,0L0,0Z"
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
          <section className={`${styles.projetos} ${anima && 'animap'}`}>
            <h3>{criacoes[proximo].img}</h3>
          </section>
        </div>
        <section className={styles.SectionTexto}>
          <p className={`${styles.criacao}  ${anima && 'animap'}`}>
            {criacoes[proximo].texto}
          </p>
          <section className={`${styles.botao} ${anima && 'animap'}`}>
            <div onClick={next}>Próximo</div>
            <div onClick={voltar}>Anterior</div>
          </section>
        </section>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#1c1c1c"
          fill-opacity="1"
          d="M0,64L1440,256L1440,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Projetos;

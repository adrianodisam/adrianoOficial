import React from 'react';
import styles from '../Projetos/Projetos.module.css';
import svggithub from '../img/github.png';
import deceMania from '../img/doceMania.png';
const criacoes = [
  {
    nome: 'Site',
    url: 'https://lannydocemania.com.br/',
    img: deceMania,
  },
  {
    nome: 'Site',
    url: 'https://lannydocemania.com.br/',
    img: deceMania,
  },
  {
    nome: 'Site',
    url: 'https://lannydocemania.com.br/',
    img: deceMania,
  },
];
const Projetos = () => {
  const [dados, setDados] = React.useState([]);
  const [projetos, setProjetos] = React.useState(null);

  React.useEffect(() => {
    fetch('https://api.github.com/users/adrianodisam/repos')
      .then((res) => res.json())
      .then((data) => setDados(data));
  }, []);
  React.useEffect(() => {
    for (let i = 0; i <= dados.length; i++) {
      setTimeout(() => {
        setProjetos(i);
      }, 80 * i);
    }
  }, [dados]);

  return (
    <div className={styles.Projetos}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0e091b"
          fill-opacity="1"
          d="M0,64L80,58.7C160,53,320,43,480,69.3C640,96,800,160,960,160C1120,160,1280,96,1360,64L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
      <div className={styles.projetosMomento}>
        <h1 id="Projetos">
          <span>{projetos}</span> Projetos
        </h1>
        <p>Até o momento no Github</p>{' '}
        <img className={styles.svgGithub} src={svggithub} alt="svggithub" />
      </div>

      {criacoes.map((criacao) => (
        <div className={styles.container}>
          <div className={styles.texto}>
            <h2>{criacao.nome}</h2> <span>{criacao.url}</span>
          </div>

          <div
            className={styles.criacao}
            style={{
              backgroundImage: `url("${criacao.img}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
      ))}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
        <path
          fill="#0e091b"
          fill-opacity="1"
          d="M0,192L48,202.7C96,213,192,235,288,240C384,245,480,235,576,202.7C672,171,768,117,864,80C960,43,1056,21,1152,21.3C1248,21,1344,43,1392,53.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Projetos;

import React from 'react';
import imagemX from '../img/letra-x.png';
import imagemy from '../img/menu-aberto.png';

const Img = (props) => {
  return (
    <div>
      <img
        onClick={props.onClick}
        alt="imagem"
        src={props.ativo ? imagemy : imagemX}
      />
    </div>
  );
};

export default Img;

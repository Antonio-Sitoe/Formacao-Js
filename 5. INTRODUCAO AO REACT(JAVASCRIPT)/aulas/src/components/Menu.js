import React from 'react';

const Titulo = <h1>Esse e o titulo</h1>;

const Menu = () => {
  const dados = {
    nome: 'entonio',
    idade: 18,
  };

  const frutas = ['banana', 'laranja'];
  return (
    <nav className=''>
      {Titulo}

      {'eu sou'}
      {undefined}
      {!null && 'agora e uma string'}
      <p>Nome {dados.nome}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Pode beber ?{' '}
        {dados.idade >= 18 ? 'Pode beber'.toUpperCase() : 'Nao pode beber'}
      </p>
  
      <p>
        {(function () {
          return 'eu quiz aparecer';
        })()}
      </p>
      <ul>
        <li>Navbar</li>
        <li>
          <a href='www.google.com'>Google</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;

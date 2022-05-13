import React from 'react';

function App() {
  const frutas = ['banana', 'maca', 'laranja'];
  const livros = [
    { nome: 'A Clash of Kings', ano: 1996 },
    { nome: 'A Game of Thrones', ano: 1999 },
    { nome: 'A Storm of Swords', ano: 2000 },
  ];

  function handleClick(e){
    console.log('clicou')
    alert(e.target.innerText)

  }

  function handleEnter(e){
    console.log(e)
  }

  function handleMouseMove(e  ){
    console.log(e)
  }

  return (
    <div>
      {frutas.map((item, i) => {
        return <p key={i}>{item}</p>;
      })}

      <h1>Lista de livros</h1>
      {livros
        .filter(({ ano }) => ano < 2000)
        .map((livro) => {
          return (
            <div key={livro.nome}>
              <p>
                <strong>Nome</strong> {livro.nome}
              </p>
              <p>
                <strong>Ano</strong> {livro.ano}
              </p>
            </div>
          );
        })}

      <h2>aTRIBUTOS</h2>
      <div className='contaner'>
        <label htmlFor='nome'>Nome</label>
        <input type='text' id='nome' />
        <button onClick={handleClick}>Adicionar nome</button>
      </div>

      <div className='box' onMouseMove={handleMouseMove} onMouseEnter={handleEnter}>

      </div>
    </div>
  );
}

export default App;

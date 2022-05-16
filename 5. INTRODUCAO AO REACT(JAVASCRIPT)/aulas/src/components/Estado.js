import React from 'react';
import Modal from './components/Modal';

function App() {
  const dados = {
    nome: 'antonio',
    idade: 21,
  };
  const [estado, atualizaEstado] = React.useState(0);
  const [mostrarDados, atualizaDados] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [list, setList] = React.useState(['banana', 'laranja']);

  function handleClick() {
    atualizaEstado(estado + 1);
    atualizaDados(!mostrarDados);
  }

  function handleOpenModal() {
    setShowModal(!showModal);
  }

  function addItem(){
    setList([...list, 'turanja'])
  }

  return (
    <div>
      <h1>{estado}</h1>
      <button onClick={handleClick}>{estado}</button>
      {mostrarDados === true ? (
        <>
          <p>{dados.nome}</p>
          <p>{dados.idade}</p>
        </>
      ) : (
        <h4>Nao vamos mostrar os dados</h4>
      )}
      <button onClick={handleOpenModal}>Abrir modal</button>

      <ul>
        {list.map((item, i)=>{
          return <p key={i}>{item}</p>
        })}
      </ul>

      <button onClick={addItem}>Add item</button>
      {showModal && <Modal />}
    </div>
  );
}

export default App;

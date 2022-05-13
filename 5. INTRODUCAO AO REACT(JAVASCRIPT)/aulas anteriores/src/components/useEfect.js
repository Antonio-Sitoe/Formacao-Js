import React, { useEffect } from 'react';

// componente e rendirizado
//  atualizado
//  fechado / desligado / morto

const Modal = () => {
  return <div>aqui modal</div>;
};

const App = () => {
  const [state, setState] = React.useState(0);
  const [modal, setModal] = React.useState(false);
  console.log('ocorre quando renderizado, e sempre que atualizado');

  React.useEffect(() => {
    document.title = state;
    console.log('ocorre apenas quando renderiza');
  }, [state]);

  React.useEffect(() => {
    console.log(modal);
  }, [modal]);

  React.useEffect(() => {
    function handleScrol() {
      console.log('scrol');
    }

    document.addEventListener('scroll', handleScrol);

    return function () {
      document.removeEventListener('scroll', handleScrol);
    };
  }, []);

  React.useEffect(() => {
    async function getData() {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos'
      );
      const json = await response.json();
      console.log(json);
    }
    getData();
  }, []);

  return (
    <div className='box'>
      App
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        {state}
      </button>
      <button onClick={() => setModal(!modal)}>Atualiza modal</button>
      {modal && <Modal />}
    </div>
  );
};

export default App;

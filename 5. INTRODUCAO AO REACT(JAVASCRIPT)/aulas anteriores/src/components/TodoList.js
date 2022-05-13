import React from 'react';

function App() {
  const [input, setInput] = React.useState('');
  const [list, setList] = React.useState([]);
  const inputRef = React.useRef();

  function handleChange({ target }) {
    setInput(target.value);
  }

  function handleAddElements(e) {
    e.preventDefault();
    setList([...list, input]);
    setInput('');
    inputRef.current.focus();
  }

  return (
    <div className='container'>
      <h1>First Todo width React.JS</h1>
      <p>{input}</p>
      <form>
        <input
          ref={inputRef}
          type='text'
          value={input}
          onChange={handleChange}
        />
        <button onClick={handleAddElements}>Add</button>
      </form>
      <ul>
        {list.map((li, i) => {
          return (
            <li key={i}>
              <p>
                {li} <button>Remover</button>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;

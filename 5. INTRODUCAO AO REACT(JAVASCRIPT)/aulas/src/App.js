import React from 'react';
import AddProduts from './propriedades/AddProduts';
import Produtos from './propriedades/Produtos';
import Spinner from './propriedades/Spinner';

const App = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, []);

  return (
    <div className='container'>
      <AddProduts />
      <Produtos data={data} />
    </div>
  );
};

export default App;

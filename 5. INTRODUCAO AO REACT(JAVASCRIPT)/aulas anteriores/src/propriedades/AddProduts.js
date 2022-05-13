import React from 'react';
import Input from '../components/Input';
import FilterElements from './FilterElements';

const AddProduts = () => {
  const [body, setBody] = React.useState({
    title: '',
    price: '',
    description: '',
    image: '',
    category: '',
  });

  function onChange({ target }) {
    setBody({ ...body, [target.name]: target.value });
  }

  async function addProduts() {
    fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      body: body,
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  }


  return (
    <div>
      <Input label='title' value={body.title} onChange={onChange} />
      <Input label='price' value={body.price} onChange={onChange} />
      <Input label='image' value={body.image} onChange={onChange} />
      <Input label='description' value={body.description} onChange={onChange} />
      <Input label='category' value={body.category} onChange={onChange} />
      <FilterElements addProduts={addProduts} />
    </div>
  );
};

export default AddProduts;

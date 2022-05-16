import React from 'react';

const Produtos = ({ data }) => {
  return (
    <ul>
      {data?.map(({ id, title, price, description, image, category }) => {
        return (
          <li key={id}>
            <h3>Price: {price}</h3>
            <p>category: {category}</p>
            <img src={image} alt='' />
            <h4>{title}</h4>
          </li>
        );
      })}
    </ul>
  );
};

export default Produtos;

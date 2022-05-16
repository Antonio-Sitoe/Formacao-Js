import React from 'react';
import Button from './Button';

const Header = () => {
  return (
    <header>
      <ul>
        <li>Home</li>
        <li>Contato</li>
        <li>Selecao</li>
        <li>Faq</li>
        <li>
          <Button />
        </li>
      </ul>
    </header>
  );
};

export default Header;

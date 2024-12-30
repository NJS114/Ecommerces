import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/products">Produits</a></li>
          <li><a href="/cart">Panier</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

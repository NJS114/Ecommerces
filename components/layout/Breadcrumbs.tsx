import React from 'react';

const Breadcrumbs: React.FC = () => {
  return (
    <nav className="breadcrumbs">
      <a href="/">Accueil</a> &gt; <a href="/products">Produits</a> &gt; <span>Produit 1</span>
    </nav>
  );
};

export default Breadcrumbs;

import { useRouter } from 'next/router';
import React from 'react';

const CategoryPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Produits de la catégorie : {slug}</h1>
      <p>Liste des produits pour la catégorie {slug}</p>
    </div>
  );
};

export default CategoryPage;

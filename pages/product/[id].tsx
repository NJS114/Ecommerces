import { GetServerSideProps } from 'next';
import React from 'react';
import { Product } from '@/models/product/product';
import ProductList from '@/components/product/ProductList';
import { ProductService } from '@/api/api_product';

interface ProductPageProps {
  products: Product[] | null;
  error: string | null;
}

const ProductPage: React.FC<ProductPageProps> = ({ products, error }) => {
  if (error) {
    return <p>{error}</p>;
  }

  if (!products || products.length === 0) {
    return <p>Aucun produit disponible pour le moment.</p>;
  }

  return (
    <div className="product-page">
      <h1>Produits disponibles</h1>
      <ProductList products={products} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const productService = new ProductService();
  let products: Product[] | null = null;
  let error = null;

  try {
    products = await productService.getAllProducts();
  } catch (err) {
    error = 'Erreur lors de la récupération des produits.';
  }

  return {
    props: {
      products,
      error,
    },
  };
};

export default ProductPage;

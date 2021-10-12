import React from 'react';
import useGetProducts from '../hooks/useGetProducts';
import Product from '../components/Product';

const Posters = () => {
  const { products, isLoading, error } = useGetProducts('posters');

  return isLoading ? (
    <p> Loading ... </p>
  ) : error ? (
    <p>{error}</p>
  ) : (
    products.map((product) => <Product product={product} key={product.id} />)
  );
};

export default Posters;

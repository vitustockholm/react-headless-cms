import React from 'react';
import useGetProducts from '../hooks/useGetProducts';
import Product from '../components/Product';

const AllProducts = () => {
  const { products, isLoading, error } = useGetProducts('all-products');

  return isLoading ? (
    <p> Loading ... </p>
  ) : error ? (
    <p>{error}</p>
  ) : (
    products.map((product) => <Product product={product} key={product.id} />)
  );
};

export default AllProducts;

import React from 'react';

const Prducts = ({ product }) => {
  return (
    <div key={product.id}>
      <img
        src={product.images[0].src}
        alt={product.name}
        style={{ maxWidth: '200px' }}
      />
      <br />
      <h4>{product.name}</h4>
    </div>
  );
};

export default Prducts;

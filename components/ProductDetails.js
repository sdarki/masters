import React from 'react';

const ProductDetails = ({ product }) => {
  if (!product) {
    return <div>Select a product to see the details</div>;
  }


  return (
    <div className="product-details">
      <h2>{product.name}</h2>
     
      <p>{product.details}</p>
      
    </div>
  );
};

export default ProductDetails;

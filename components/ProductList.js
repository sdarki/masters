import React from 'react';
import Link from 'next/link';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link href={`/product/${product.id}`}>
              
              {/* {product.image} */}
              <img src={product.image} alt={product.name} style={{ maxWidth: '100%', height: '250px' }} />
              <h1>{product.name}</h1>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;


import React from 'react';
import Link from 'next/link';

const ProductList = ({ products, onSelectProduct }) => {
  return (
    <div className="product-list">
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link href={`/product/${product.id}`}>
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

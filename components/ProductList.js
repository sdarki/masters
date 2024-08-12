import React from 'react';
import Link from 'next/link';
import { Card } from 'react-bootstrap';

const ProductList = ({ products }) => {
  return (
    <div className="container">
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <Link href={`/product/${product.id}`} passHref legacyBehavior>
              <Card className="h-100">
                <Card.Img 
                  variant="top" 
                  src={product.image} 
                  alt={product.name} 
                  style={{ maxHeight: '200px', objectFit: 'cover' }} 
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                    {product.name}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

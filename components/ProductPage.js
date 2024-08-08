import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import SideMenu from './SideMenu';
import ProductList from './ProductList';
import categories from '../data/categories.json';

const ProductPage = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (selectedCategoryId !== null) {
      const selectedCategory = categories.find(c => c.id === selectedCategoryId);
      setProducts(selectedCategory ? selectedCategory.products : []);
    }
  }, [selectedCategoryId]);

  const handleProductSelect = (productId) => {
    router.push(`/product/${productId}`);
  };

  return (
    <div className="app">
      <SideMenu categories={categories} onSelectCategory={setSelectedCategoryId} />
      <div className="main-content">
        {selectedCategoryId !== null && <ProductList products={products} onSelectProduct={handleProductSelect} />}
      </div>
    </div>
  );
};

export default ProductPage;

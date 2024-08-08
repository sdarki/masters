import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import SideMenu from '../../components/SideMenu';
import ProductList from '../../components/ProductList';
import categories from '../../data/categories.json';
import { Breadcrumb } from 'antd';
import SparesBreadcumb from '../../components/spares/SparesBreadcumb'

const CategoryPage = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const category = categories.find(c => c.id === parseInt(id));
      setProducts(category ? category.products : []);
      setSelectedCategoryId(parseInt(id));
    }
  }, [id]);

  const handleProductSelect = (productId) => {
    router.push(`product/${productId}`);
  };

  return (
    <>
    <SparesBreadcumb />
     <div className="app">
      <SideMenu categories={categories} />
      <div className="main-content">
        {selectedCategoryId !== null && <ProductList products={products} onSelectProduct={handleProductSelect} />}
      </div>
    </div>
    </>
   
  );
};

export default CategoryPage;

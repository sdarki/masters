import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import SideMenu from '../../components/SideMenu';
import productDetails from '../../data/productDetails.json';
import categories from '../../data/categories.json';
import SparesBreadcumb from '../../components/spares/SparesBreadcumb';

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      const productDetail = productDetails.find(p => p.id === parseInt(id));
      setProduct(productDetail);
    }
  }, [id]);

  const handleCategorySelect = (categoryId) => {
    router.push(`/category/${categoryId}`); // Adjust this URL as needed
  };

  return (
    <>
    <SparesBreadcumb/>
     <div className="app">
      <SideMenu categories={categories} onSelectCategory={handleCategorySelect} />
      <div className="main-content">
        <div className="product-details">
          {product ? (
            <>
              <h2>{product.name}</h2>
              <img src={product.image} alt={product.name} style={{ maxWidth: '100%', height: 'auto' }} />
              <p>{product.details}</p>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
    </>
   
  );
};

export default ProductDetailPage;

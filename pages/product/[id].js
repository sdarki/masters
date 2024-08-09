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


              { product.details && (
                <>
              <h2>Description</h2>
              <p>{product.details}</p>
              </>
             ) }
             { product.specification && (
              <>
              <h2>Specification</h2>
              <p>{product.specification}</p>
              </>
            ) }
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

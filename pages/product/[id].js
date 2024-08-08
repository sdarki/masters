import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import SideMenu from '../../components/SideMenu';
import productDetails from '../../data/productDetails.json';
import categories from '../../data/categories.json';

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    if (id) {
      // Fetch product details based on ID
      const productDetail = productDetails.find(p => p.id === parseInt(id));
      setProduct(productDetail);

      // Fetch all products
      setAllProducts(productDetails);
    }
  }, [id]);

  const handleProductSelect = (productId) => {
    router.push(`/product/${productId}`);
  };

  return (
    <div className="app">
      <SideMenu categories={categories} onSelectCategory={() => router.push('/')}/>
      <div className="main-content">
        <div className="product-details">
          {product ? (
            <>
              <h2>{product.name}</h2>
              <p>{product.details}</p>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

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
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (id) {
      const productDetail = productDetails.find(p => p.id === parseInt(id));
      
      if (productDetail) {
        setProduct(productDetail);
        setSelectedImage(productDetail.image?.[0]); // Set the first image as default
      }
    }
  }, [id]);

  const handleCategorySelect = (categoryId) => {
    router.push(`/category/${categoryId}`);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <SparesBreadcumb />
      <div className="app">
        <SideMenu categories={categories} onSelectCategory={handleCategorySelect} />
        <div className="main-content">
          <div className="product-details">
            {product ? (
              <>
                <h2>{product.name}</h2>

                <div>
                  {product.image && product.image.length > 1 ? (
                    <>
                      <div className="image-tabs">
                        {product.image.map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt={`Product Image ${index + 1}`}
                            onMouseOver={() => handleImageClick(image)}
                            width={100}
                            height={100}
                            style={{
                              objectFit: 'cover',
                              cursor: 'pointer',
                              border: selectedImage === image ? '2px solid blue' : '1px solid gray',
                            }}
                          />
                        ))}
                      </div>

                      <img 
                        src={selectedImage}
                        alt="Selected Product"
                        height={300}
                        style={{ display: 'block', marginTop: '20px' }}
                      />
                    </>
                  ) : (
                    product.image && (
                      <img
                        src={product.image[0]}
                        alt="Single Product"
                        height={300}
                      />
                    )
                  )}
                </div>

                {product.details && (
                  <>
                    <h2>Description</h2>
                    <p>{product.details}</p>
                  </>
                )}

                {product.specification && (
                  <>
                    <h2>Specification</h2>
                    <div dangerouslySetInnerHTML={{ __html: product.specification }} />
                  </>
                )}
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


// import { useRouter } from 'next/router';
// import { useState, useEffect } from 'react';
// import SideMenu from '../../components/SideMenu';
// import productDetails from '../../data/productDetails.json';
// import categories from '../../data/categories.json';
// import SparesBreadcumb from '../../components/spares/SparesBreadcumb';

// const ProductDetailPage = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const [product, setProduct] = useState(null);
//   const [selectedImage, setSelectedImage] = useState(null);

//   useEffect(() => {
//     if (id) {
//       const productDetail = productDetails.find(p => p.id === parseInt(id));
      
//       if (productDetail) {
//         setProduct(productDetail);
//         setSelectedImage(productDetail.image?.[0]); // Set the first image as default
//       }
//     }
//   }, [id]);

//   const handleCategorySelect = (categoryId) => {
//     router.push(`/category/${categoryId}`);
//   };

//   const handleImageClick = (image) => {
//     setSelectedImage(image);
//   };

//   return (
//     <>
//       <SparesBreadcumb />
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-md-3">
//             <SideMenu categories={categories} onSelectCategory={handleCategorySelect} />
//           </div>
//           <div className="col-md-9">
//             <div className="product-details mt-4">
//               {product ? (
//                 <>
//                   <h2 className="mb-3">{product.name}</h2>
//                   <div className="row">
//                     <div className="col-md-4">
//                       {product.image && product.image.length > 1 ? (
//                         <>
//                           <div className="image-tabs d-flex flex-wrap">
//                             {product.image.map((image, index) => (
//                               <img
//                                 key={index}
//                                 src={image}
//                                 alt={`Product Image ${index + 1}`}
//                                 onMouseOver={() => handleImageClick(image)}
//                                 width={100}
//                                 height={100}
//                                 className={`img-thumbnail m-1 ${selectedImage === image ? 'border-primary' : ''}`}
//                                 style={{ objectFit: 'cover', cursor: 'pointer' }}
//                               />
//                             ))}
//                           </div>
//                           <img 
//                             src={selectedImage}
//                             alt="Selected Product"
//                             className="img-fluid mt-3"
//                             style={{ maxHeight: '400px', width: '100%' }}
//                           />
//                         </>
//                       ) : (
//                         product.image && (
//                           <img
//                             src={product.image[0]}
//                             alt="Single Product"
//                             className="img-fluid"
//                             style={{ maxHeight: '400px', width: '100%' }}
//                           />
//                         )
//                       )}
//                     </div>
//                     <div className="col-md-8">
//                       {product.details && (
//                         <>
//                           <h3 className="mt-3">Description</h3>
//                           <p>{product.details}</p>
//                         </>
//                       )}

//                       {product.specification && (
//                         <>
//                           <h3 className="mt-4">Specification</h3>
//                           <div dangerouslySetInnerHTML={{ __html: product.specification }} />
//                         </>
//                       )}
//                     </div>
//                   </div>
//                 </>
//               ) : (
//                 <p>Loading...</p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductDetailPage;

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
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <SideMenu categories={categories} onSelectCategory={handleCategorySelect} />
          </div>
          <div className="col-lg-9 col-md-8">
            <div className="product-details mt-4">
              {product ? (
                <div className="row">
                  <div className="col-md-9">
                    {/* Image and Description Section */}
                    <div className="d-flex flex-column align-items-center">
                      <div className="image-tabs d-flex justify-content-center mb-4 flex-wrap">
                        {product.image.map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt={`Product Image ${index + 1}`}
                            onClick={() => handleImageClick(image)}
                            width={80}
                            height={80}
                            className={`img-thumbnail m-1 ${selectedImage === image ? 'border-primary' : ''}`}
                            style={{ objectFit: 'cover', cursor: 'pointer' }}
                          />
                        ))}
                      </div>
                      <img 
                        src={selectedImage}
                        alt="Selected Product"
                        className="img-fluid"
                        style={{ maxHeight: '400px', width: '100%' }}
                      />
                      <div className="mt-4">
                        <h2 className="mb-3">{product.name}</h2>
                        {product.details && (
                          <>
                            <h3>Description</h3>
                            <p>{product.details}</p>
                          </>
                        )}
                        {product.specification && (
                          <>
                            <h3>Specification</h3>
                            <div dangerouslySetInnerHTML={{ __html: product.specification }} />
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;

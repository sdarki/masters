import React,{useState} from 'react';
import { useRouter } from 'next/router';
import { products } from '../../components/spares/products';
import styles from '../../components/spares/sparse.module.css';

const getProductById = (id) => {
  for (const category in products) {
    const product = products[category].find(item => item.title === id);
    if (product) return product;
  }
  return null;
};

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const product = getProductById(id);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };
return (
<div style={{ display: 'flex' }}>
      {/* <div className={styles.popupOverlay}> */}
        {/* <div className={styles.popupContainer}> */}
          <div className='container'>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <div className={styles.closeButton} onClick={() => router.back()}>&times;</div>
              <div>
                {product.descImg.length > 1 ? (
                  <div>
                  <div className={styles.tabContainer}>
                    {product.descImg.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Tab ${index + 1}`}
                        width={100}
                        height={100}
                        className={currentImageIndex === index ? styles.activeTabImage : styles.tabImage}
                        onMouseOver={() => handleImageClick(index)}
                      />
                    ))}
                  </div>
                  <img
                    src={product.descImg[currentImageIndex]}
                    height={300}
                    alt={product.title}
                    className={styles.deityImage}
                  />
                </div>
              ) : (
                <img
                  src={product.descImg[0]}
                  height={300}
                  alt={product.title}
                  className={styles.deityImage}
                />
              )}
            </div>

              <div className={styles.infoContainer}>
                <h1 style={{ color: "black" }} className={styles.infoTitle}>{product.title}</h1>
                {product.specification && (
                  <>
                    <h3>SPECIFICATION</h3>
                    <div dangerouslySetInnerHTML={{ __html: product.specification }}></div>
                  </>
                )}
                 {product.desc && (
                  <>
                <h3>DESCRIPTION</h3>
                <div className={styles.infoDescription} style={{ textAlign: "justify", color: "black", fontSize: "18px" }} dangerouslySetInnerHTML={{ __html: product.desc }}></div>
                </>
                 )}
              </div>
            </div>
          </div>
    //     </div>
    //   </div>
    // </div>
              )
};

export default ProductPage;

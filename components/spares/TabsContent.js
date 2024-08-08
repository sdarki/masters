// import React from "react";
// import styles from './sparse.module.css';
// function TabContent({ activeTab, images }) {
//   const activeImage = images.find((image) => image.id === activeTab);
//   return (
//     <div className={styles.tabContent}>
//       {activeImage ? <img src={activeImage.src} height={300} alt={activeImage.label} className={styles.deityImage} /> : 'No content available'}
//     </div>
//   );
// }
// export default TabContent
import React from "react";
import styles from './sparse.module.css';

function TabsContent({ activeTab, images }) {
  const activeImage = images.find((image) => image.id === activeTab);
  return (
    <div className={styles.tabContent}>
      {activeImage ? <img src={activeImage.img} height={300} alt={activeImage.label} className={styles.deityImage} /> : 'No content available'}
    </div>
  );
}

export default TabsContent;


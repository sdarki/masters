// import React from "react";
// import styles from './sparse.module.css';
// function ImageTabs({ tabs, activeTab, setActiveTab }) {
//   return (
//     <div className={styles.tabs}>
//       {tabs.map((tab) => (
//         <button
//           key={tab.id}
//           className={`${styles.tab} ${tab.id === activeTab ? styles.active : ''}`}
//           onClick={() => setActiveTab(tab.src)}
//         >
//           {tab.label}
//         </button>
//       ))}
//     </div>
//   );
// }
// export default ImageTabs
import React from "react";
import styles from './sparse.module.css';

function ImageTabs({ tabs, activeTab, setActiveTab }) {
  return (
    <div className={styles.tabs} >
      {tabs.map((tab) => (
        <button 
          key={tab.id}
          className={`${styles.tab} ${tab.id === activeTab ? styles.active : ''}`}
          onMouseOver={() => setActiveTab(tab.id)}
        >
           <img style={{width:"100px"}} src={tab.img} alt={tab.label} className={styles.tabImage} />
           {/* {tab.img} */}
        </button>
      ))}
    </div>
  );
}

export default ImageTabs;


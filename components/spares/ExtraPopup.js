// import React,{useState} from 'react';
// import styles from './sparse.module.css';
// import ImageTabs from './ImageTabs';
// import TabContent from './TabsContent'; 

// function ExtraPopup({ selected, handleClose }) {
//     const [selectedCard, setSelectedCard] = useState(0);
//     const handleCardClick = (index) => {
//         setSelectedCard(index);
//     };
//     return (
//         <div style={{display:'flex'}} >
//             {
//                  <div className={styles.popupOverlay}>
//                  <div className={styles.popupContainer}>
//                 <div className={`container  ${styles.deity_info_box}`}>
//                     <div style={{display:"flex",flexWrap:"wrap"}}>
//                     <div className={styles.closeButton} onClick={handleClose}>&times;</div>
//                  <div>
//                     {selected.descImg.map((tab,index) => (<div key ={index} onMouseOver={()=> handleCardClick(index)}>
//                         <img src={tab.img}/> </div>))}
//                  </div>
                   
//                     {/* <div>
//                         {
//                             selected.descImg.map((item,index)=>
//                                 <img src={item.imgSrc} height={300} alt={selected.title} key={index} className={styles.deityImage}/>
//                             )
//                         }
//                     </div> */}

//                     <div className={styles.infoContainer}>
//                         <h1  style={{color:"black"}} className={styles.infoTitle}>{selected.title}</h1>
                       
//                             <h3>DESCRIPTION</h3>
//                     <div className={styles.infoDescription} style={{ textAlign: "justify", color:"black", fontSize:"18px"}} dangerouslySetInnerHTML={{ __html: selected.desc }}></div>
//                     </div>
//                 </div>
//                 </div>

//                </div> 
//                </div>
//             }
//         </div>    


             
//     );
// }

// export default ExtraPopup;
import React, { useState } from 'react';
import styles from './sparse.module.css';
import ImageTabs from './ImageTabs';
import TabsContent from './TabsContent'; 

function ExtraPopup({ selected, handleClose }) {
    const [activeTab, setActiveTab] = useState(selected.descImg[0].id);

    return (
        <div className={styles.popupOverlay}>
            <div className={styles.popupContainer}>
                <div className={`container ${styles.deity_info_box}`}>
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                        <div className={styles.closeButton} onClick={handleClose}>&times;</div>
                        <div>
                            <ImageTabs
                                tabs={selected.descImg}
                                activeTab={activeTab}
                                setActiveTab={setActiveTab}
                            />
                        </div>
                        <div>
                            <TabsContent
                                activeTab={activeTab}
                                images={selected.descImg}
                            />
                        </div>
                        <div className={styles.infoContainer}>
                            <h1 style={{ color: "black" }} className={styles.infoTitle}>{selected.title}</h1>
                            <h3>DESCRIPTION</h3>
                            <div className={styles.infoDescription} style={{ textAlign: "justify", color: "black", fontSize: "18px" }} dangerouslySetInnerHTML={{ __html: selected.desc }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    );
}

export default ExtraPopup;

import React, { useState } from 'react';
import styles from './sparse.module.css';
import ImageTabs from './ImageTabs';
import TabsContent from './TabsContent'; 

function PopUpTwo({ selected, handleClose }) {
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
                            <h3>SPECIFICATION</h3>
                        <div dangerouslySetInnerHTML={{ __html: selected.specification }}></div>
                            <h3>DESCRIPTION</h3>
                            <div className={styles.infoDescription} style={{ textAlign: "justify", color: "black", fontSize: "18px" }} dangerouslySetInnerHTML={{ __html: selected.desc }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    );
}

export default PopUpTwo;

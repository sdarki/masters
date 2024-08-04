import React from 'react';
import styles from './sparse.module.css';

function Popup({ selected, handleClose }) {

    return (
        <div style={{display:'flex'}} >
            {
                 <div className={styles.popupOverlay}>
                 <div className={styles.popupContainer}>
                <div className={`container  ${styles.deity_info_box}`}>
                    <div style={{display:"flex",flexWrap:"wrap"}}>
                    <div className={styles.closeButton} onClick={handleClose}>&times;</div>
                    <div>
                        {
                            selected.descImg.map((v,index)=>
                                <img src={v} height={300} alt={selected.title} key={index} className={styles.deityImage}/>
                            )
                        }
                    </div>

                    <div className={styles.infoContainer}>
                        <h1  style={{color:"black"}} className={styles.infoTitle}>{selected.title}</h1>
                        <h3>SPECIFICATION</h3>
                        <div dangerouslySetInnerHTML={{ __html: selected.specification }}></div>
                            <h3>DESCRIPTION</h3>
                    <div className={styles.infoDescription} style={{ textAlign: "justify", color:"black", fontSize:"18px"}} dangerouslySetInnerHTML={{ __html: selected.desc }}></div>
                    </div>
                </div>
                </div>

               </div> 
               </div>
            }
        </div>    


             
    );
}

export default Popup;

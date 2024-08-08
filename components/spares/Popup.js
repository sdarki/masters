import React from 'react';
function Popup({ selected, handleClose }) {

    return (
        <div style={{display:'flex'}} >
            {
                 <div className={styles.popupOverlay}>
                 <div className={styles.popupContainer}>
                <div className={`container  ${styles.deity_info_box}`}>
                    <div style={{display:"flex",flexWrap:"wrap"}}>
                    <div className={styles.closeButton} onClick={handleClose}>&times;</div>
                    

                    
                </div>
                </div>

               </div> 
               </div>
            }
        </div>    


             
    );
}

export default Popup;

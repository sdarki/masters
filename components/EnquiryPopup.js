import React from 'react';
import styles from './Popup.module.css';

const EnquiryPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={`${styles.popupoverlay}`}>
      <div className={`${styles.popupcontent}`}>
        <button className={`${styles.closebtn}`} onClick={onClose}>&times;</button>
        <h2>Send Enquiry</h2>
        <form>
          <div className={`${styles.formgroup}`}>
            <input type="text" placeholder="Name *" className={`${styles.formcontrol}`} />
          </div>
          <div className={`${styles.formgroup}`}>
            <div className={`${styles.phoneinput}`}>
              <span className={`${styles.flagicon}`}>🇮🇳</span>
              <span className={`${styles.countrycode}`}>+91</span>
              <input type="text" placeholder="Mobile Number *" className={`${styles.formcontrol}`} />
            </div>
          </div>
          <div className={`${styles.formgroup}`}>
            <input type="email" placeholder="Email" className={`${styles.formcontrol}`} />
          </div>
          <div className={`${styles.formgroup}`}>
            <textarea placeholder="Message" className={`${styles.formcontrol}`}></textarea>
            <small>0 of 1000 characters</small>
          </div>
          <button type="submit" className={`${styles.submitbtn}`}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryPopup;

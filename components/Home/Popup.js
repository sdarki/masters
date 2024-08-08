import React,{useState} from 'react';
import styles from '../spares/sparse.module.css'
import { Form } from 'react-bootstrap';


function Popup({ handleClose }) {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [charCount, setCharCount] = useState(0);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContainer}>
        <div className={`container ${styles.deity_info_box}`}>
          <div>
            <div className={styles.closeButton} onClick={handleClose}>&times;</div>
            <h2>Send Enquire </h2>
            <Form>
            <div className={styles.form_group}>
                    <label htmlFor="name">Name *</label>
                    <input 
                        placeholder='name'
                        type="text" 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="mobile">Mobile Number *</label>
                    <div className={styles.mobile_input}>
                        <select className={styles.country_code}>
                            <option value="+91">🇮🇳 +91</option>
                            {/* Add more country codes as needed */}
                        </select>
                        <input 
                            type="tel" 
                            id="mobile" 
                            value={mobile} 
                            onChange={(e) => setMobile(e.target.value)} 
                            required 
                        />
                    </div>
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="message">Message</label>
                    <textarea 
                        id="message" 
                        value={message} 
                        onChange={(e) => {
                            setMessage(e.target.value);
                            setCharCount(e.target.value.length);
                        }} 
                        maxLength="1000"
                    ></textarea>
                    <p className={styles.char_count}>{charCount} of 1000 characters</p>
                </div>
                <button type="submit" className={styles.submit_btn}>Submit</button>
                </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;

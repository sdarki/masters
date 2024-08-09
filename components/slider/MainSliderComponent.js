import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import EnquiryPopup from '../EnquiryPopup'; // Import the popup component
import styles from './MainSliderComponent.module.css';

const MainSliderComponent = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className={styles.mainSlider}>
      <Image
        src="/images/aebanner-min.jpg" 
        alt="Warehouse"
        layout="fill"
        objectFit="cover"
        className={styles.sliderImage}
      />
      <Container className={styles.container}>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h1 className={` ${styles.headd}`}>Services And Products You Will Love</h1>
            <Button variant="dark" className={`mt-3 ${styles.backbtn}`} onClick={togglePopup}>
              Enquire Now
            </Button>
          </Col>
        </Row>
      </Container>
      
      {/* Render the Enquiry Popup */}
      <EnquiryPopup isOpen={isPopupOpen} onClose={togglePopup} />
    </div>
  );
};

export default MainSliderComponent;

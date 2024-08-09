import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from './Master.module.css'; // Import custom styles

const MasterAbout = () => {
    return (
        <Container className={`my-5 about-us-container ${styles.aboutContainer}`}>
             <h1>Meet the Team...</h1>
            <Row className="align-items-center">
                <Col md={6}>
                   <h2>What we have?</h2>
                    <p>
                        We are amongst the leading manufacturers of quality rcc products. We as a company have diversified and extended our goodwill to areas of activities such as manufacturing of rcc pipes, manhole systems and precast products. We follow a total quality management system. Our three stage quality assurance system include raw material inspection, in-process control and final testing of every batch.
                    </p>
                    <Button className={styles.abtn}><a href="/categories">Learn More</a></Button>
                </Col>
                <Col md={6} className="text-center">
                    <div className={`${styles.imagecontainer}`}>
                        <img src="/images/aboutpic.png" alt="About Us" className={`img-fluid ${styles.largeimage} `} />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default MasterAbout;

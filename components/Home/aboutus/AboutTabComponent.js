

// AboutTabComponent.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutTabComponent = ({ items }) => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Why Us</h2>
      <Row>
        {items.map((item, index) => (
          <Col md={6} key={index} className="mb-4 text-center">
            <div className="d-flex flex-column align-items-center">
              <img className="icon mb-3"src={item.icon}/>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AboutTabComponent;


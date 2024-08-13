import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EnquiryModal = ({ show, onClose, productName }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Enquire Now</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </Form.Group>
          <Form.Group controlId="formEmail" className="mt-3">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </Form.Group>
          <Form.Group controlId="formNumber" className="mt-3">
            <Form.Label>Number</Form.Label>
            <Form.Control 
              type="text" 
              name="number" 
              value={formData.number} 
              onChange={handleChange} 
              required 
            />
          </Form.Group>
          <Form.Group controlId="formSubject" className="mt-3">
            <Form.Label>Subject</Form.Label>
            <Form.Control 
              type="text" 
              name="subject" 
              value={productName} 
              readOnly 
            />
          </Form.Group>
          <Button variant="dark" type="submit" className="mt-4">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EnquiryModal;

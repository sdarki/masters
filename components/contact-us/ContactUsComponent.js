import React from 'react';

const ContactUsComponent = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5">Get In Touch</h2>
      <div className="row text-center">
        <div className="col-md-3">
          <div>
            <img src="/images/contact/location.jpg" alt="Office Icon" className="img-fluid" style={{ maxWidth: '120px' }} />
          </div>
          <h5>Our Office Address</h5>
          <p>near sahakari petrol pump,curti-borim bypass road, Ponda, Goa 403401</p>
        </div>
        <div className="col-md-3">
          <div>
            <img src="/images/contact/message.jpeg" alt="Enquiry Icon"className="img-fluid" style={{ maxWidth: '120px' }} />
          </div>
          <h5>General Enquiries</h5>
          <p>masterashok65@gmail.com</p>
        </div>
        <div className="col-md-3">
          <div>
            <img src="/images/contact/call.jpeg" alt="Call Icon" className="img-fluid" style={{ maxWidth: '120px' }}/>
          </div>
          <h5>Call Us</h5>
          <p style={{ marginBottom: '5px' }}>+91-9421304620</p>
          <p style={{ marginBottom: '5px' }}>+91-9226740810</p>
          
        </div>
        <div className="col-md-3">
          <div>
            <img src="/images/contact/clock.png" alt="Timing Icon" className="img-fluid" style={{ maxWidth: '120px' }} />
          </div>
          <h5>Our Timings</h5>
          <p>Mon - Sun : 09:00 AM - 09:00 PM</p>
        </div>
      </div>
      <form className="mt-4">
        <div className="row">
          <div className="col-md-4 mb-3">
            <input type="text" className="form-control" placeholder="Full Name" />
          </div>
          <div className="col-md-4 mb-3">
            <input type="email" className="form-control" placeholder="Email ID" />
          </div>
          <div className="col-md-4 mb-3">
            <input type="text" className="form-control" placeholder="Mobile Number" />
          </div>
        </div>
        <div className="mb-3">
          <textarea className="form-control" rows="4" placeholder="Message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ContactUsComponent;

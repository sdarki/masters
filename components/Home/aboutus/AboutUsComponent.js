import React from 'react';
import AboutTabComponent from './AboutTabComponent';


const items = [
  {
    icon:  '/images/why-us/y1.webp',
    title: 'Exceptional Staff',
    description: 'Our team comprises talented and dedicated individuals who are committed to providing top-notch services. Each member brings unique skills and experiences, contributing to a collaborative and innovative environment.'
  },
  {
    icon:  '/images/why-us/y2.webp',
    title: 'Premium Quality',
    description: 'Our consultation services are designed to provide you with expert guidance and personalized solutions tailored to your unique needs.'
  },
  {
    icon:  '/images/why-us/y3.webp',
    title: 'Affordable Pricing',
    description: 'Our installation services ensure that your systems and equipment are set up efficiently and correctly from the start. With a team of skilled technicians and a commitment to quality.'
  },
  {
    icon: '/images/why-us/y4.webp',
    title: 'High Industry Standards',
    description: 'Our Annual Maintenance Contract (AMC) services provide comprehensive support to ensure the longevity and optimal performance of your systems and equipment.'
  }
];

const AboutUsComponent = () => {
  return (
    <div className="App">
      <AboutTabComponent items={items} />
    </div>
  );
};

export default AboutUsComponent;

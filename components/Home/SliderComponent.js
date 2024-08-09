// import React from "react";

// function EngineerProducts() {
//   const lazyRoot = React.useRef(null)
//   const [id, setId] = React.useState('bu-3')
//   function onMouseOverHandle(id) {
//       setId(id)
//   }
//   return (
    
//     <div className="">
//         <div className="section-full b_nature bg-white why-us wow fadeIn">
//             <div className="container-fluid">
//                 <div className="row">
//                     <div className="col-md-3">
//                         <div className="nob_left_box">
//                             <div className="head-block">
//                                 <h4 className="w-title">Engineer Products</h4></div>
//                                 <p className="w-title1">Setting the Benchmark for Qaulity</p>
//                             </div></div>
                            
//                             <div className="col-md-9" >
//                             <div className="nob_box">
//                                 <div className="acco-container" ref={lazyRoot}>
//                                  <ul className="accordion-group">
//                                     <li className={`lazy bu-1 ${id == 'bu-1' ? 'out' : ''} `} onMouseOver={() => onMouseOverHandle('bu-1')}>
//                                     <img src="/images/products/home (4).png" alt="" />
//                                     <div className="accordion-overlay"></div>
//                                             <h3>Home Appliances<i className="fa fa-long-arrow-right" aria-hidden="true"></i></h3>
//                                             <section><article>
//                                                 <h4>Home Appliances</h4>
//                                                 <p><b>Quality Assurance:</b> We follow strict norms in production and inspection to deliver defect-free products.</p>
// <p><b>Techniques:</b> Advanced methods like SPC, FMEA, and 5S ensure top-quality practices. </p>
// <p><b>Preventive Measures:</b> Horizontal deployment ensures consistent quality across product lines. </p>
// <p><b>OEM Collaboration:</b>Direct online links with OEMs maintain alignment with their standards.
// </p></article> </section></li>

// <li className={`lazy bu-2 ${id == 'bu-2' ? 'out' : ''} `} onMouseOver={() => onMouseOverHandle('bu-2')}>
//                                     <img src="/images/products/telecomm6.jpg" alt="" />
//                                     <div className="accordion-overlay"></div>
//                                             <h3>TeleComm Appliances<i className="fa fa-long-arrow-right" aria-hidden="true"></i></h3>
//                                             <section><article>
//                                                 <h4>TeleComm Appliances</h4>
//                                                 <p><b>Quality Assurance:</b> We follow strict norms in production and inspection to deliver defect-free products.</p>
// <p><b>Techniques:</b> Advanced methods like SPC, FMEA, and 5S ensure top-quality practices. </p>
// <p><b>Preventive Measures:</b> Horizontal deployment ensures consistent quality across product lines. </p>
// <p><b>OEM Collaboration:</b>Direct online links with OEMs maintain alignment with their standards.
// </p></article> </section></li>
// </ul>
//                             </div></div></div>
//                             </div>  </div>   </div>   </div>   

//                             );
// }
// export default EngineerProducts
// SliderComponent.js




import React from 'react';
import { Carousel } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Slider.module.css';

const services = [
  {
    title: 'Consultation',
    image: '/images/services/s1.jpg',
    description: 'Owing to our huge industrial knowledge and rich information, we are offering our customers with the best consultancy services. These services are available in varied provisions as per the detailed needs of our customers.'
  },
  {
    title: 'Installation',
    image: '/images/services/s4.jpg',
    description: 'To meet the growing requirement of our precious consumers, our firm offers Installation Services. This installation service is reliable and available for patrons in the simplest way. We apply minimal chargers for this service.'
  },
  {
    title: 'Delivery',
    image: '/images/services/s2.jpg',
    description: 'We hold expertise in providing doorstep delivery of the services to our customers. By leveraging the breadth and reliability of our global network, we make sure to deliver the desired service on stipulated time.'
  },
  {
    title: 'AMC',
    image: '/images/services/s3.jpg',
    description: 'AMC We are proficient to render all types of AMC Service. This service is rendered under the guidance of skillful employees. To meet the meticulous requirements and demands of our respected customers, we also customise this service as per their necessities'
  },
];

 
const SliderComponent = () => (

  <div className="container text-center my-5">
    <h1 className="text-muted font-weight-bold mb-4">Services</h1>
    <Carousel arrows infinite={false} className={`w-100 py-3 ${styles.Carousel}`} >

      {services.map((service, index) => (
        <div key={index} className="d-flex flex-column flex-md-row align-items-center justify-content-center p-3">
          <div className="col-12 col-md-6 p-3">
            <img src={service.image} alt={service.description} className="img-fluid rounded"/>
          </div>
          <div className="col-12 col-md-6 p-3 text-black bg-grey rounded">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <button className={styles.sbtn}><a href='/contact-us'>Enquire Now</a></button>
          </div>
        </div>
      ))}
    </Carousel>
  </div>
);

export default SliderComponent;

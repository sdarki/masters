import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from 'react-responsive';
//import { VideoCameraAddOutlined } from '@ant-design/icons';
import Image from 'next/image';
import "swiper/css";
import "swiper/css/pagination";
import { MinusOutlined } from '@ant-design/icons';
import { Pagination,Autoplay } from "swiper";
import AboutTabComponent from '../Home/aboutus/AboutTabComponent';
import AboutUsComponent from '../Home/aboutus/AboutUsComponent';
import AboutUsResponsiveComponent from '../Home/AboutUsResponsiveComponent';

const MainSliderComponent = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 476 });
 
  return (
    <>
      <section className="section-full bg-gray slider-area new-area">
        <div className='Section-contentainer'>
        <h1>Services And Products</h1>
       <h1>You Will Love</h1>
       <button className='sectionBtn'>Enquire Now</button>
        </div>
      
      </section>
      {isSmallScreen ? <AboutUsResponsiveComponent /> : <AboutUsComponent />}

    </>
    
  )
}

export default MainSliderComponent
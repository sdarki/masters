import React from 'react'
import MainSliderComponent from '../components/slider/MainSliderComponent'
import ClientsComponent from '../components/clients/ClientsComponent'
import ReviewComponent from '../components/Home/getInTouch/ReviewComponent'
import LocationComponent from '../components/Home/locationfol/PhotoGallery';
import CompaniesSmallScreenComponent from '../components/Home/CompaniesSmallScreenComponent';
import AboutNetworkComponent from '../components/about-us/AboutNetworkComponent';
import AboutGetToComponent from '../components/about-us/AboutGetToComponent';
import TabOneComponent from '../components/Home/forCompanies/TabOneComponent';
import CompaniesComponent from '../components/Home/forCompanies/CompaniesComponent';
import SliderComponent from '../components/Home/SliderComponent';
import PhotoGallery from '../components/Home/locationfol/PhotoGallery';
import MasterAbout from '../components/about-us/MasterAbout';
const index = () => {
  return (
    <>
      <MainSliderComponent/>

      {/* <CompaniesComponent /> */}
      {/* <TrialComponent /> */}
      {/* <CompaniesResponsiveComponent /> */}
      {/* <ProductComponent/> */}
      <SliderComponent/>
      {/* <StandForComponent/> */}
      {/* <NetworkComponent /> */}
      {/* <QualitySectionComponent/> */}
      {/* <AboutNetworkComponent /> */}

      <ReviewComponent />
      {/* <ClientsComponent/> */}
      <PhotoGallery />
      {/* <ClientTestimonialComponent/> */}
      <MasterAbout/>
    </>
  )
}

export default index
// import React, { useState, useEffect } from 'react';
// import SideMenu from '../components/SideMenu';
// import ProductDetails from '../components/ProductDetails';
// import menuItems from '../data/menu.json';
// import productDetails from '../data/productDetails.json';
// // import '../styles/App.css';

// const Home = () => {
//   const [selectedProductId, setSelectedProductId] = useState(null);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   useEffect(() => {
//     if (selectedProductId !== null) {
//       const productDetail = productDetails.filter(p => p.id === selectedProductId)[0];
//       const productName = menuItems.filter(p => p.id === selectedProductId)[0].name;
//       setSelectedProduct({ ...productDetail, name: productName });
//     }
//   }, [selectedProductId]);

//   return (
//     <div className="app">
//       <SideMenu menuItems={menuItems} onSelectProduct={setSelectedProductId} />
//       <ProductDetails product={selectedProduct} />
//     </div>
//   );
// };

// export default Home;

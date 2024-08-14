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
import { useRouter } from 'next/router';
// import ProductPage from '../components/ProductPage';
const index = () => {
  const Router=useRouter();
  return (
    <>
      <MainSliderComponent/>

      {/* <CompaniesComponent /> */}
      {/* <TrialComponent /> */}
      {/* <CompaniesResponsiveComponent /> */}
      {/* <ProductComponent/> */}
      <div id="services11"></div>
      <SliderComponent/>
      {/* <StandForComponent/> */}
      {/* <NetworkComponent /> */}
      {/* <QualitySectionComponent/> */}
      {/* <AboutNetworkComponent /> */}

      <ReviewComponent />
      {/* <ClientsComponent/> */}
      <div id='gallery11'></div>
      <PhotoGallery />
      {/* <ProductPage /> */}
      {/* <ClientTestimonialComponent/> */}
      <MasterAbout/>
    </>
  )
}

export default index
// import React, { useState, useEffect } from 'react';
// import SideMenu from '../components/SideMenu';
// import ProductList from '../components/ProductList';
// import ProductDetails from '../components/ProductDetails';
// import categories from '../data/categories.json';
// import productDetails from '../data/productDetails.json';
// // import '../styles/App.css';


// const Home = () => {
//   const [selectedCategoryId, setSelectedCategoryId] = useState(null);
//   const [selectedProductId, setSelectedProductId] = useState(null);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     if (selectedCategoryId !== null) {
//       const selectedCategory = categories.filter(c => c.id === selectedCategoryId)[0];
//       setProducts(selectedCategory.products);
//       setSelectedProductId(null);  // Clear product selection when category changes
//       setSelectedProduct(null);    // Clear product details when category changes
//     }
//   }, [selectedCategoryId]);

//   useEffect(() => {
//     if (selectedProductId !== null) {
//       const productDetail = productDetails.filter(p => p.id === selectedProductId)[0];
//       const productName = products.filter(p => p.id === selectedProductId)[0].name;
//       setSelectedProduct({ ...productDetail, name: productName });
//     }
//   }, [selectedProductId]);

//   return (
//     <div className="app">
//       <SideMenu categories={categories} onSelectCategory={setSelectedCategoryId} />
//       <div className="main-content">
//         {selectedCategoryId !== null && <ProductList products={products} onSelectProduct={setSelectedProductId} />}
//         <ProductDetails product={selectedProduct} />
//       </div>
//     </div>
//   );
// };

// export default Home;

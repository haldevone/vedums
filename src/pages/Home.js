import React from 'react';
import { Router } from 'react-router';
import Cards from '../components/Cards';
import ContactHome from '../components/ContactHome';
import HeaderHome from '../components/HeaderHome';
import MapsHome from '../components/MapsHome';
import PriceHome from '../components/PriceHome';


function Home() {
    return (
      <>
      <HeaderHome />
        <Cards />
        <PriceHome />
        {/* <ContactHome /> */}
        <MapsHome />
      </>
    );
  }
  
  export default Home;
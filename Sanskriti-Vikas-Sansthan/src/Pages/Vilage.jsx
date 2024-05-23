import React from 'react'
import VillageIndustries from '../Components/HomePageComponents/VillageIndustries/Component6'
import DrawerAppBar from "../Components/Navbar/Navbar";
import Footer from "../Components/HomePageComponents/footer/Footer";

const Village = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
    <DrawerAppBar />
    <VillageIndustries />
    <Footer />
  </div>
  )
}

export default Village;
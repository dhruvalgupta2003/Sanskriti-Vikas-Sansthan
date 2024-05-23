import React from 'react'
import AboutUs from "../Components/HomePageComponents/About us/Component6";
import DrawerAppBar from "../Components/Navbar/Navbar";
import Footer from "../Components/HomePageComponents/footer/Footer";

const Home = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
    <DrawerAppBar />
    <AboutUs />
    <Footer />
  </div>
  )
}

export default Home;
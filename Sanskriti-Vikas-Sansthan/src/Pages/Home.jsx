import React from 'react'
import Component1 from "../Components/HomePageComponents/component1/Component1";
import DrawerAppBar from "../Components/Navbar/Navbar";
import Footer from "../Components/HomePageComponents/footer/Footer";

const Home = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
    <DrawerAppBar />
    <Component1 />
    <Footer />
  </div>
  )
}

export default Home
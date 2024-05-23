import React from 'react'
import Component5 from '../Components/HomePageComponents/yogaComponent/Component5'
import DrawerAppBar from "../Components/Navbar/Navbar";
import Footer from "../Components/HomePageComponents/footer/Footer";

const Home = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
    <DrawerAppBar />
    <Component5/>
    <Footer />
  </div>
  )
}

export default Home
import React from "react";
import "./Component1.scss";
import Services from "../services/Services";
import bannerImage1 from "../../../assets/HomePage.png";
import bannerImage2 from "../../../assets/image2.png";
import bannerImage3 from "../../../assets/image3.png";
import bannerImage5 from "../../../assets/image02.png";
import Products from "../Products";
import OurProcess from "../ourprocess/OurProcess";
import Wardrobes from "../wardrobes/Wardrobes";
import Bathroom from "../bathrooms/Bathroom";
import RequestCallback from "../../RequestCallback";

function Component1() {
  const divStyle = {
    height: "100%",
    width: "100%",
  };
  const svg4 = (
    <svg
      width="305"
      height="3"
      viewBox="0 0 305 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="305" height="3" fill="#6D3516" />
    </svg>
  );

  return (
    <div className="component-1-wrapper">
      <div className="component-1-container">
        <img src={bannerImage1} />
        <p>
          Sanskriti Vikas <br />
          <span className="sans">Sansthan</span>

        </p>
      </div>
      <div className="component-2-container">
        <div className="banner-2-container">
          <img src={bannerImage2} alt="" />
        </div>
        <div className="dream-text">
          <div
            className="wardrobes"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              padding: "0 2rem",
            }}
          >
            <h1> Our Mission</h1>
            <span className="line2">
              {" "}
              <svg
                width="305"
                height="3"
                viewBox="0 0 305 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="305" height="3" fill="#FFC94B" />
              </svg>
            </span>
          </div>
          <div className="process-text">
            Amet eu facilisi posuere ut at cras non ipsum proin nunc purus
            tellus ultricies velit elementum ut dui sed augue ultrices phasellus
            ullamcorper condimentum
            ut suspendisse viverra ornare sit venenatis
            Amet eu facilisi posuere ut at cras non ipsum proin nunc purus
            tellus ultricies velit
            <button
              className="view-more-button"
              style={{ color: "black", margin: "20px 0" }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <Services />
      <img
        src={bannerImage3}
        alt=""
        style={{ height: "100vh", width: "100vw", padding: "50px 0" }}
      />
      <Wardrobes />
      <div
        className="relative"
        style={{ height: "100vh", width: "100vw", padding: "50px 0" }}
      >
        <img
          src={bannerImage5}
          alt="Banner"
          className="w-full h-full object-cover"
          style={divStyle}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Village Industries and Khadi
          </h1>
          <h2 className="text-2xl md:text-4xl text-white">
            Elevate Your presence like a Pro
          </h2>
        </div>
      </div>
      <Bathroom />
      {/* <img
        src={bannerImage6}
        alt=""
        style={{ height: "100vh", width: "100vw", padding: "50px 0" }}
      /> */}
      <Products />
      <OurProcess />
      <RequestCallback />
    </div>
  );
}

export default Component1;

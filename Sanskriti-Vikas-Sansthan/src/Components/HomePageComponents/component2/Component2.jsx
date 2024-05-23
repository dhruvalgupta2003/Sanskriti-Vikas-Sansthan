import React from "react";
import "./Component1.scss";
import Services from "../services/Services";
import bannerImage1 from "../../../assets/image1.webp";
import bannerImage2 from "../../../assets/image2.png";
import bannerImage3 from "../../../assets/image3.webp";
import bannerImage5 from "../../../assets/image5.png";
import bannerImage6 from "../../../assets/image6.png";
import OurProcess from "../ourprocess/OurProcess";
import Wardrobes from "../wardrobes/Wardrobes";
import Bathroom from "../bathrooms/Bathroom";
const Component2 = () => {
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
        <p>+ Kitchens</p>
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
            <h1> Our Inspiration</h1>
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
            <span style={{ color: "#FFC94B" }}>
              {" "}
              ullamcorper condimentum
            </span>{" "}
            ut suspendisse viverra ornare sit venenatis
            <p style={{ color: "#6B6B6B" }}>
              Amet eu facilisi posuere ut at cras non ipsum proin nunc purus
              tellus ultricies velit{" "}
            </p>
            <button
              className="view-more-button"
              style={{ color: "black", margin: "20px 0" }}
            >
              Read More
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
      <img
        src={bannerImage5}
        alt=""
        style={{ height: "100vh", width: "100vw", padding: "50px 0" }}
      />
      <Bathroom />
      <img
        src={bannerImage6}
        alt=""
        style={{ height: "100vh", width: "100vw", padding: "50px 0" }}
      />
      <OurProcess />
    </div>
  );
};

export default Component2;

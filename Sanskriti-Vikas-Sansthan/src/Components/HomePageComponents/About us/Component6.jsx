import React from "react";
import "./Component6.scss";
import Services from "./services/Services";
import bannerImage1 from "../../../assets/yogabg.png";
import bannerImage2 from "../../../assets/bg-inner1.png";
import bannerImage3 from "../../../assets/image3.png";
import bannerImage5 from "../../../assets/image02.png";
import OurProcess from "./ourprocess/OurProcess";
import Bathroom from "./bathrooms/Bathroom";
import Wardrobes from "./wardrobes/Wardrobes";
import RequestCallback from "./BulkOrder";

function Component5() {
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
    <div className="component-5-wrapper">
      <div className="component-5-container">
        <img src={bannerImage1} />
        <p>
          About Us
        </p>
      </div>
      <div className="component-52-container">
        <div className="banner-52-container">
          <img src={bannerImage2} alt="" className="bg-inner1" />
        </div>
        <div className="dream-text">
          <div
            className="wardrobes"
            style={{
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
          </div>
          <div className="process-text">
          <h1> About<br/> Sanskriti Vikas <br /> Sansthan  </h1>

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
      
      <Wardrobes />
      <Bathroom />
      {/* <img
        src={bannerImage6}
        alt=""
        style={{ height: "100vh", width: "100vw", padding: "50px 0" }}
      /> */}
      <OurProcess />
      <RequestCallback />
    </div>
  );
}

export default Component5;

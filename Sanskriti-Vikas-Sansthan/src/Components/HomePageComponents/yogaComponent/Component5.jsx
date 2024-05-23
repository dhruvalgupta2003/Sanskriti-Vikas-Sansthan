import React from "react";
import "./Component5.scss";
import Services from "./services/Services";
import bannerImage1 from "../../../assets/yogabg.png";
import bannerImage2 from "../../../assets/bg-inner1.png";
import OurProcess from "./ourprocess/OurProcess";
import Bathroom from "./bathrooms/Bathroom";
import Wardrobes from "./wardrobes/Wardrobes";
import RequestCallback from "./BulkOrder";

function Component5() {
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
        <img src={bannerImage1} alt="Yoga Background" />
        <p>YOGA</p>
      </div>
      <div className="component-52-container">
        <div className="banner-52-container">
          <img src={bannerImage2} alt="Inner Background" className="bg-inner"/>
        </div>
        <div className="dream-text">
          <div className="wardrobes">
            <h1>Why Yoga?</h1>
            <span className="line2">
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
              ullamcorper condimentum
            </span>
            ut suspendisse viverra ornare sit venenatis
            <p style={{ color: "#6B6B6B" }}>
              Amet eu facilisi posuere ut at cras non ipsum proin nunc purus
              tellus ultricies velit
            </p>
            <button className="view-more-button" style={{ margin: "20px 0" }}>
              Read More
            </button>
          </div>
        </div>
      </div>
      
      <Wardrobes />
      <Bathroom />
      <div className="our-process-section">
        <OurProcess />
      </div>
      <div className="request-callback-section">
        <RequestCallback />
      </div>
    </div>
  );
}

export default Component5;

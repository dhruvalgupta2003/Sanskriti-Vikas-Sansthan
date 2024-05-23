import React from "react";
import "./OurProcess.scss";
import Who1 from '../../../../assets/who1.png';
import Who2 from '../../../../assets/who1.png';
import Who3 from '../../../../assets/who1.png';
import { LuLeaf } from "react-icons/lu";
import { RiToolsLine, Ri24HoursFill } from "react-icons/ri";

function OurProcess() {
  const svg4 = (
    <svg
      width="305"
      height="3"
      viewBox="0 0 305 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="305" height="3" fill="white" />
    </svg>
  );
  const iconStyle = {
    fontSize: "40px",
  };
  return (
    <div className="who-we-are-wrapper">
    <div className="who-we-are-container">
      <div className="who-we-are-header">
        <svg
          width="305"
          height="3"
          viewBox="0 0 305 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="305" height="3" fill="white" />
        </svg>
        <h1>Who We are</h1>
      </div>
      <div className="three-images">
        <div className="image-box">
          <img src={Who1} alt="Interior 1" />
          <p>Amet eu facilisi posuere ut at cras non ipsum proin</p>
        </div>
        <div className="image-box">
          <img src={Who2} alt="Interior 2" />
          <p>Amet eu facilisi posuere ut at cras non ipsum proin</p>
        </div>
        <div className="image-box">
          <img src={Who3} alt="Interior 3" />
          <p>Fasaclisi posuere ut at cras non ipsum proin</p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default OurProcess;

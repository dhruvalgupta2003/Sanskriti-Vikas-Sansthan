import React from "react";
import "./OurProcess.scss";
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
    <div className="our-process-wrapper">
      <div className="process-container">
        <div className="why-us-line">
          <span className="line"> {svg4}</span>
          <h1> About Us</h1>
        </div>
        <div className="process-text">
          Amet eu facilisi posuere ut at cras non ipsum proin nunc purus tellus
          ultricies velit elementum ut dui sed augue ultrices phasellus
          <span style={{ color: "#F2BF7E" }}> ullamcorper condimentum</span> ut
          suspendisse viverra ornare sit venenatis
        </div>
        <div className="our-process-yellow">
        </div>
        <div className="three-boxes">
          <div className="three-box">
            <LuLeaf style={iconStyle} />
            <p>German Designs</p>
          </div>
          <div className="three-box">
            <RiToolsLine style={iconStyle} />
            <p>Easy Maintainence</p>
          </div>
          <div className="three-box">
            <Ri24HoursFill style={iconStyle} />
            <p>24*7</p>
            <p> Support</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProcess;

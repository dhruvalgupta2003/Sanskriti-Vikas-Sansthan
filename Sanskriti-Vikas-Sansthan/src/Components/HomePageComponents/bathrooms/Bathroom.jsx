import React from "react";
import image5 from "../../../assets/about.png";

function Bathroom() {
  const svg4 = (
    <svg width="300" height="9" viewBox="0 0 300 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="9" rx="4.5" fill="#5E9E72" />
  </svg>
  );
  return (
    <div className="wardrobes-container">
      <div
        className="wardrobes"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "0 2rem",
        }}
      >
        {svg4}
        <h1 style={{ textAlign: "right" }}> About</h1>
      </div>
      <div className="wardrobe-inner">
        <div className="dual-images"><img src={image5} alt="" /></div>
        <div className="wardrobe-text" style={{ textAlign: "right" }}>
          Crafting Timeless Spaces: Where <br /> Vision Meets <br />
          <span style={{ color: "gray" }}>Precision</span>
        </div>
      </div>
    </div>
  );
}

export default Bathroom;

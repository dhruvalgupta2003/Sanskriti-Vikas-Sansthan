import React from "react";
import image4 from "../../../assets/image4.png";

function Wardrobes() {
  const svg4 = (
    <svg width="300" height="9" viewBox="0 0 300 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="9" rx="4.5" fill="#5E9E72" />
    </svg>

  );
  return (
    <div className="wardrobes-container">
      <div className="wardrobes">
        {svg4}
        <h1>About</h1>
      </div>
      <div className="wardrobe-inner">
        <div className="wardrobe-text">
          <h5 className="text-lg">
            Style Meets Function: Elevate Your Space like a <br />
          </h5>
          <p className="text-[24px] text-wrap">
            {" "}
            Amet eu facilisi posuere ut at cras non ipsum proin nunc purus
            tellus ultricies velit Amet eu facilisi posuere ut at cras non ipsum
            proin nunc purus tellus ultricies velit Amet eu facilisi posuere ut
            at cras non ipsum proin nunc purus tellus ultricies velit Amet eu
            facilisi posuere ut at cras non ipsum proin nunc purus tellus
            ultricies velit Amet eu facilisi posuere ut at cras non ipsum proin
            nunc purus tellus ultricies velit{" "}
          </p>
        </div>
        <div>
          <img src={image4} alt="" />
        </div>
      </div>
      <button className="view-more-button">View More</button>
    </div>
  );
}

export default Wardrobes;

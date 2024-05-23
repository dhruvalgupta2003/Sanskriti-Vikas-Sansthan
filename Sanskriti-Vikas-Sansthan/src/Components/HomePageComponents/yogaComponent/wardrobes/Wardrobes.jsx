import React from "react";
import image4 from "../../../../assets/visioin.png";

function Wardrobes() {
  const svg4 = (
    <svg
      width="305"
      height="3"
      viewBox="0 0 305 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="305" height="3" fill="#0E1B1B" />
    </svg>
  );
  return (
    <div className="wardrobes-container">
      <div className="wardrobes">
        {svg4}
        <h1>our vision</h1>
      </div>
      <div className="wardrobe-inner">
        <div>
          <img src={image4} alt="" />
        </div>
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
      </div>
    </div>
  );
}

export default Wardrobes;

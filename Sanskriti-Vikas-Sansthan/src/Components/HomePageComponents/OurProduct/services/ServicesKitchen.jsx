import React from "react";
import { servicesDataKitchen } from "../../../Constants/index";
import svg1 from "../../../assets/Drill.svg";
import svg2 from "../../../assets/Hammer.svg";
import svg3 from "../../../assets/Construction Worker.svg";

function ServicesKitchen() { // Corrected component name
  return (
    <div>
      <div className="services">
        {servicesDataKitchen.map((service, index) => (
          <div className="service" key={index}>
            {/* Assuming svg1, svg2, svg3 are imported SVG components */}
            {index === 0 && svg1}
            {index === 1 && svg2}
            {index === 2 && svg3}
            <h1>{service.title}</h1>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesKitchen; // Export statement matches component name

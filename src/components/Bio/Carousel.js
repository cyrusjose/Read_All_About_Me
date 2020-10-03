import React from "react";
import "./Carousel.css";
import image1 from "./images/0BCA225E-FD8A-4766-BA70-AC5C079ABD0E_1_105_c.jpeg";
import image2 from "./images/38E9A998-02EB-47CB-A440-8748B9132E61_1_105_c.jpeg";
import image3 from "./images/853EF3D0-194B-411E-906C-C1F1554880CE_1_105_c.jpeg";
import image4 from "./images/2528B186-7536-4768-AAD3-E7B52FBEA014_1_105_c.jpeg";
import image5 from "./images/3002EF88-4EE9-4A88-BDA4-3AFB2E8642B8_1_105_c.jpeg";
import image6 from "./images/9962E91F-DCB7-4C2E-8927-85F323D00F9D_1_105_c.jpeg";
import image7 from "./images/26068E5F-D1CF-4F6E-BDE2-DC0E1C797C4D_1_105_c.jpeg";
import image8 from "./images/A8C03D1C-0771-49A3-BADB-DE4C0C4A2BDD_1_105_c.jpeg";
import image9 from "./images/AACA9A01-B7B3-438D-B3A1-0C060731077F_1_105_c.jpeg";
import image10 from "./images/BC854AA0-6992-4E1C-8F96-A53295CE0000_1_105_c.jpeg";
import image11 from "./images/EA9A2B14-C6FD-4FA4-A343-BEB13A0642C1_1_105_c.jpeg";

export default function Carousel() {
  return (
    
      <div
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-interval="5000">
            <img src={image1} className="d-block w=100" alt="" />
          </div>
          <div className="carousel-item" data-interval="5000">
            <img src={image2} className="d-block w=100" alt="" />
          </div>
          <div className="carousel-item" data-interval="5000">
            <img src={image3} className="d-block w=100" alt="" />
          </div>
          <div className="carousel-item" data-interval="5000">
            <img src={image4} className="d-block w=100" alt="" />
          </div>
          <div className="carousel-item" data-interval="5000">
            <img src={image5} className="d-block w=100" alt="" />
          </div>
          <div className="carousel-item" data-interval="5000">
            <img src={image6} className="d-block w=100" alt="" />
          </div>
          <div className="carousel-item" data-interval="5000">
            <img src={image7} className="d-block w=100" alt="" />
          </div>
          <div className="carousel-item" data-interval="5000">
            <img src={image8} className="d-block w=100" alt="" />
          </div>
          <div className="carousel-item" data-interval="5000">
            <img src={image9} className="d-block w=100" alt="" />
          </div>
          <div className="carousel-item" data-interval="5000">
            <img src={image10} className="d-block w=100" alt="" />
          </div>
          <div className="carousel-item" data-interval="5000">
            <img src={image11} className="d-block w=100" alt="" />
          </div>
        </div>
      </div>
  );
}

import React from "react";
import "./Bio.css";
import profile from "./images/profile.jpeg";
import Carousel from "./Carousel";
export default function Bio() {
  return (
    <div className="container -fluid mainBio row">
      <img src={profile} alt="profile" className="profilePic fade-in1" />
      <div className="description fade-in1">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
          reiciendis quia in, ullam ipsam, laborum dolores reprehenderit dolorum
          ea molestias facilis, porro sit exercitationem praesentium
          repudiandae? Porro totam sed iste?
        </p>
      </div>
      <div className="carouselContainer">
        <Carousel />
      </div>
    </div>
  );
}

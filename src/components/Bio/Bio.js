import React from "react";
import "./Bio.css";
import profile from "./images/profile.jpeg"
export default function Bio() {
  return (
    <div className="mainBio row">
      <img src={profile} alt="profile" className="profilePic" />
      <div className="description">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint reiciendis quia in, ullam ipsam, laborum dolores reprehenderit dolorum ea molestias facilis, porro sit exercitationem praesentium repudiandae? Porro totam sed iste?</p>
      </div>
    </div>
  );
}

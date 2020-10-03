import React from "react";
import "./Bio.css";
import profile from "./images/profile.jpeg";
import Carousel from "./Carousel";
import Fade from "../Fade/Fade";
export default function Bio() {
  return (
    <div className="container -fluid mainBio row">
      <Fade>
        <img src={profile} alt="profile" className="profilePic fade-in1" />
      </Fade>
      <div className="description">
      <Fade>
        <p className="description2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
          reiciendis quia in, ullam ipsam, laborum dolores reprehenderit dolorum
          ea molestias facilis, porro sit exercitationem praesentium
          repudiandae? Porro totam sed iste? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Nesciunt sint cum molestiae atque illum
          vero. Excepturi, corporis sint dicta cum mollitia dolor earum? Saepe
          eius sapiente aspernatur totam rerum voluptatem? Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Nesciunt aliquam asperiores cum
          possimus natus dolores, doloribus cupiditate quod molestias, maxime
          tenetur ipsum nisi repudiandae sed quas odit? Sed, repudiandae atque?
        </p>
      </Fade>
      </div>
      <Fade>
        <Carousel />
      </Fade>
    </div>
  );
}

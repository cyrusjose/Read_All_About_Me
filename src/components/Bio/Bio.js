import React from "react";
import "./Bio.css";
import profile from "./images/profile.jpeg";
import Carousel from "./Carousel";
import Fade from "../Fade/Fade";
import { Link } from "react-router-dom";
export default function Bio() {
  return (
    <div className="container -fluid mainBio row">
      <Fade>
        <img src={profile} alt="profile" className="profilePic fade-in" />
      </Fade>
      <div className="description">
        <Fade>
          <p className="description2">
            My name is Cyrus and it's a pleasure to meet you.
            <br />
            <br /> I graduated with a Bachelor's degree in mathematics with a
            concentration in Economics and a certificate for Introductory
            Actuarial Science from
            <Link to="//www.csusb.edu/">
              <span> California State University of San Bernardino. </span>
            </Link>
            <br />
            <br /> Currently, I am working for McGraw Hill ALEKS as a Math
            Quality Control Specialist. I review math problems in their homework
            engines to ensure that the student is receiving quality math
            content. Recently, we have been helping with content creation and
            design for the new homework problems.
            <br />
            <br /> I have enrolled in the
            <Link to="//bootcamp.extension.ucr.edu/coding/">
              <span> Coding Bootcamp at UCR </span>
            </Link>
            to become a skilled developer. I always strive to improve myself and
            enhance my skill set.
            <br />
            <br />
            Let's head over to the
            <Link to="/contact"> contact page </Link>
            so that you can tell me more about yourself! I also love to travel
            so take a peek at some pictures I took while traveling below!
          </p>
        </Fade>
      </div>
      <Fade>
        <Carousel />
      </Fade>
    </div>
  );
}

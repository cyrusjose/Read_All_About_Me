/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Project.css";
import { Link } from "react-router-dom";
import Fade from "../Fade/Fade";

export default function Projects() {
  return (
    <div>
      <div className="container mt-5 mb-5 pb-5">
        <Fade>
          <div className="row row-cols-1 row-cols-md-2 my-5">
            <div className="col mb-4 p-5">
              <div className="portCard">
                <Link className="topCard" to="/groupprojects">
                  <img
                    src="https://images.pexels.com/photos/3626622/pexels-photo-3626622.jpeg?cs=srgb&dl=group-of-people-in-a-meeting-3626622.jpg&fm=jpg"
                    className="pexelImage img-fluid"
                    alt="Group Image From Pexel"
                  />
                  <div className="card-img-overlay row align-items-end justify-content-center">
                    <h3 className="card-title">
                      <strong>Group Projects</strong>
                    </h3>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col mb-4 p-5">
              <div className=" portCard ">
                <a
                  className="topCard"
                  href="https://damp-falls-15705.herokuapp.com/"
                  target="_blank"
                >
                  <img
                    src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?cs=srgb&dl=pexels-valeria-boltneva-1199957.jpg&fm=jpg"
                    className=" pexelImage img-fluid"
                    alt="Computer Image From Pexel"
                  />
                  <div className="card-img-overlay row align-items-end justify-content-center">
                    <h3 className="card-title">
                      <strong>Hamburgers!</strong>
                    </h3>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Fade>
        <Fade>
          <div className="row row-cols-1 row-cols-md-2 my-5 ">
            <div className="col mb-4 p-5">
              <div className=" portCard ">
                <a
                  className="topCard"
                  href="https://cyrusjose.github.io/Code-Quiz/"
                  target="_blank"
                >
                  <img
                    src="https://images.pexels.com/photos/2740954/pexels-photo-2740954.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                    className=" pexelImage img-fluid"
                    alt="Computer Image From Pexel"
                  />
                  <div className="card-img-overlay row align-items-end justify-content-center">
                    <h3 className="card-title">
                      <strong>Code Quiz</strong>
                    </h3>
                  </div>
                </a>
              </div>
            </div>
            <div className="col mb-4 p-5">
              <div className=" portCard ">
                <a
                  className="topCard"
                  href="https://cyrusjose.github.io/WeatherDashboard/"
                  target="_blank"
                >
                  <img
                    src="https://images.pexels.com/photos/2310713/pexels-photo-2310713.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                    className=" pexelImage img-fluid"
                    alt="Clouds Image From Pexel"
                  />
                  <div className="card-img-overlay row align-items-end justify-content-center">
                    <h3 className="card-title">
                      <strong>Weather App</strong>
                    </h3>
                  </div>
                </a>
              </div>
            </div>
          </div>{" "}
        </Fade>
        <Fade>
          <div className="row row-cols-1 row-cols-md-2 my-5">
            <div className="col mb-4 p-5">
              <div className=" portCard ">
                <a
                  className="topCard"
                  href="../assets/Simple-Apps/RPS/rps.html"
                  target="_blank"
                >
                  <img
                    src="https://images.pexels.com/photos/133372/pexels-photo-133372.jpeg?cs=srgb&dl=balance-balancing-boulder-close-up-133372.jpg&fm=jpg"
                    className=" pexelImage img-fluid"
                    alt="Board Game Image from Pexel"
                  />
                  <div className="card-img-overlay row align-items-end justify-content-center">
                    <h3 className="card-title">
                      <strong>RPS Game</strong>
                    </h3>
                  </div>
                </a>
              </div>
            </div>
            <div className="col mb-4 p-5">
              <div className=" portCard ">
                <a
                  className="topCard"
                  href="../assets/Simple-Apps/Questions/question.html"
                  target="_blank"
                >
                  <img
                    src="https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?cs=srgb&dl=question-mark-on-yellow-background-3683107.jpg&fm=jpg"
                    className=" pexelImage img-fluid"
                    alt="Question Mark"
                  />
                  <div className="card-img-overlay row align-items-end justify-content-center">
                    <h3 className="card-title">
                      <strong>Questions Game</strong>
                    </h3>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Fade>
        <Fade>
          <div className="row row-cols-1 row-cols-md-2 my-5">
            <div className="col mb-4 p-5">
              <div className=" portCard ">
                <a
                  className="topCard"
                  href="../assets/Simple-Apps/Car/carGame.html"
                  target="_blank"
                >
                  <img
                    src="https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?cs=srgb&dl=forced-perspective-photography-of-cars-running-on-road-below-799443.jpg&fm=jpg"
                    className=" pexelImage img-fluid"
                    alt="Cars and Phone Image"
                  />
                  <div className="card-img-overlay row align-items-end justify-content-center">
                    <h3 className="card-title">
                      <strong>Around The World</strong>
                    </h3>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

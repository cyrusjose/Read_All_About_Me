/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Project.css";
import { Link } from "react-router-dom";

export default function Projects(props) {
  return (
    <div>
      <div class="container mt-5">
        <div class="row row-cols-1 row-cols-md-2">
          <div class="col mb-4 p-5">
            <div class="card portCard ">
                <Link className = "topCard" to = "/groupprojects">
                <img
                  src="https://images.pexels.com/photos/3626622/pexels-photo-3626622.jpeg?cs=srgb&dl=group-of-people-in-a-meeting-3626622.jpg&fm=jpg"
                  class="card-img-top pexelImage img-fluid"
                  alt="Group Image From Pexel"
                />
                <div class="card-img-overlay row align-items-end justify-content-center">
                  <h3 class="card-title">
                    <strong>Group Projects</strong>
                  </h3>
                </div>
                </Link>
                
            </div>
          </div>
          <div class="col mb-4 p-5">
            <div class="card portCard ">
              <a
                class="topCard"
                href="https://damp-falls-15705.herokuapp.com/"
                target="_blank"
              >
                <img
                  src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?cs=srgb&dl=pexels-valeria-boltneva-1199957.jpg&fm=jpg"
                  class="card-img-top pexelImage img-fluid"
                  alt="Computer Image From Pexel"
                />
                <div class="card-img-overlay row align-items-end justify-content-center">
                  <h3 class="card-title">
                    <strong>Hamburgers!</strong>
                  </h3>
                </div>
              </a>
            </div>
          </div>
          <div class="col mb-4 p-5">
            <div class="card portCard ">
              <a
                class="topCard"
                href="https://cyrusjose.github.io/Code-Quiz/"
                target="_blank"
              >
                <img
                  src="https://images.pexels.com/photos/2740954/pexels-photo-2740954.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                  class="card-img-top pexelImage img-fluid"
                  alt="Computer Image From Pexel"
                />
                <div class="card-img-overlay row align-items-end justify-content-center">
                  <h3 class="card-title">
                    <strong>Code Quiz</strong>
                  </h3>
                </div>
              </a>
            </div>
          </div>
          <div class="col mb-4 p-5">
            <div class="card portCard ">
              <a
                class="topCard"
                href="https://cyrusjose.github.io/WeatherDashboard/"
                target="_blank"
              >
                <img
                  src="https://images.pexels.com/photos/2310713/pexels-photo-2310713.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                  class="card-img-top pexelImage img-fluid"
                  alt="Clouds Image From Pexel"
                />
                <div class="card-img-overlay row align-items-end justify-content-center">
                  <h3 class="card-title">
                    <strong>Weather App</strong>
                  </h3>
                </div>
              </a>
            </div>
          </div>
          <div class="col mb-4 p-5">
            <div class="card portCard ">
              <a
                class="topCard"
                href="../assets/Simple-Apps/RPS/rps.html"
                target="_blank"
              >
                <img
                  src="https://images.pexels.com/photos/133372/pexels-photo-133372.jpeg?cs=srgb&dl=balance-balancing-boulder-close-up-133372.jpg&fm=jpg"
                  class="card-img-top pexelImage img-fluid"
                  alt="Board Game Image from Pexel"
                />
                <div class="card-img-overlay row align-items-end justify-content-center">
                  <h3 class="card-title">
                    <strong>RPS Game</strong>
                  </h3>
                </div>
              </a>
            </div>
          </div>
          <div class="col mb-4 p-5">
            <div class="card portCard ">
              <a
                class="topCard"
                href="../assets/Simple-Apps/Questions/question.html"
                target="_blank"
              >
                <img
                  src="https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?cs=srgb&dl=question-mark-on-yellow-background-3683107.jpg&fm=jpg"
                  class="card-img-top pexelImage img-fluid"
                  alt="Question Mark"
                />
                <div class="card-img-overlay row align-items-end justify-content-center">
                  <h3 class="card-title">
                    <strong>Questions Game</strong>
                  </h3>
                </div>
              </a>
            </div>
          </div>
          <div class="col mb-4 p-5">
            <div class="card portCard ">
              <a
                class="topCard"
                href="../assets/Simple-Apps/Car/carGame.html"
                target="_blank"
              >
                <img
                  src="https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?cs=srgb&dl=forced-perspective-photography-of-cars-running-on-road-below-799443.jpg&fm=jpg"
                  class="card-img-top pexelImage img-fluid"
                  alt="Cars and Phone Image"
                />
                <div class="card-img-overlay row align-items-end justify-content-center">
                  <h3 class="card-title">
                    <strong>Around The World</strong>
                  </h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Group.css";

export default function Group() {
  return (
    <div>
      <div class="container mt-5">
        <div class="row row-cols-1 row-cols-md-2">
          <div class="col mb-4 p-5">
            <div class="card portCard ">
              <a
                class="topCard"
                href="https://cyrusjose.github.io/Spontaneous-Weekend/"
                target="_blank"
              >
                <img
                  src="https://images.pexels.com/photos/712395/pexels-photo-712395.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  class="card-img-top pexelImage img-fluid"
                  alt="Board Game Image from Pexel"
                />
                <div class="card-img-overlay row align-items-end justify-content-center">
                  <h1 class="card-title">
                    <strong>Spontaneous Weekend</strong>
                  </h1>
                </div>
              </a>
            </div>
          </div>
          <div class="col mb-4 p-5">
            <div class="card portCard ">
              <a
                class="topCard"
                href="https://github.com/cyrusjose/Spontaneous-Weekend"
                target="_blank"
              >
                <img
                  src="https://images.pexels.com/photos/712395/pexels-photo-712395.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  class="card-img-top pexelImage img-fluid"
                  alt="Board Game Image from Pexel"
                />
                <div class="card-img-overlay row align-items-end justify-content-center">
                  <h1 class="card-title">
                    <strong>Spontaneous Weekend (github)</strong>
                  </h1>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="row row-cols-1 row-cols-md-2">
          <div class="col mb-4 p-5">
            <div class="card portCard ">
              <a
                class="topCard"
                href="https://secure-savannah-12538.herokuapp.com/signup.html"
                target="_blank"
              >
                <img
                  src="https://images.pexels.com/photos/712395/pexels-photo-712395.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  class="card-img-top pexelImage img-fluid"
                  alt="Board Game Image from Pexel"
                />
                <div class="card-img-overlay row align-items-end justify-content-center">
                  <h1 class="card-title">
                    <strong>Spontaneous Weekend 2.0</strong>
                  </h1>
                </div>
              </a>
            </div>
          </div>
          <div class="col mb-4 p-5">
            <div class="card portCard ">
              <a
                class="topCard"
                href="https://github.com/melindawinter/Spontaneous-Weekend"
                target="_blank"
              >
                <img
                  src="https://images.pexels.com/photos/712395/pexels-photo-712395.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  class="card-img-top pexelImage img-fluid"
                  alt="Board Game Image from Pexel"
                />
                <div class="card-img-overlay row align-items-end justify-content-center">
                  <h1 class="card-title">
                    <strong>Spontaneous Weekend 2.0 (github)</strong>
                  </h1>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

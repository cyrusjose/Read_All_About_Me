/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import PDF from "../Contact_Info/resume/Resume.pdf";

export default function Footer() {
  return (
    <footer className="mt-auto py-3 fixed-bottom">
      <div className="container">
        <Link to="//github.com/cyrusjose">
          <span className="text-muted px-5">
            <i className="fab fa-github contactIcon"></i>
          </span>
        </Link>

        <a href={PDF} target="_blank">
          <span className="text-muted px-5">
            <i className="fas fa-book"></i>
          </span>
        </a>

        <Link to="//www.linkedin.com/in/cyrus-jose-b8b874a3/">
          <span className="text-muted px-5">
            <i className="fab fa-linkedin contactIcon"></i>
          </span>
        </Link>

        <Link to="/contact">
          <span className="text-muted px-5">
            <i className="fas fa-envelope contactIcon"></i>
          </span>
        </Link>
      </div>
    </footer>
  );
}

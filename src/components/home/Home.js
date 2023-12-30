import React from "react";
import "./Home.css";
import Header from "../../header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="app-container">
        <Header />
      <header className="app-header">
        <div className="content-container">
          <div className="profile-container">
            <img
              src={"../img/Profile_pic.jpg"}
              alt="Profile Pic"
              className="profile-pic"
            />
          </div>
          <div className="text-container">
            <h1>Kevin Dhameliya</h1>
            <p className="portfolio-text">Welcome to my portfolio website!</p>
            <div className="contact-info">
              <p>
                <FontAwesomeIcon icon={faGraduationCap} /> B.E. - Computer Engineering
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} /> Ph: +91-9727318649
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} /> Email: dhameliyakevin405@gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> Ahmedabad, Gujarat,India - 380017
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;

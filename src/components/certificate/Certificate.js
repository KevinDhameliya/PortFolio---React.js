import React, { useState } from "react";
import "./Certificate.css";
import Header from "../../header/Header";
import certi from "../certificate/training_certificate.jpg";

function Certificate() {
  const [showCertificate, setShowCertificate] = useState(false);

  const handleShowCertificate = () => {
    setShowCertificate(true);
  };

  const handleCloseCertificate = () => {
    setShowCertificate(false);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="main-heading">Certificate</h2>

        <div className="project">
          <div className="sub-head">
            <h3>Data Structure, Coursera</h3>
          </div>
        </div>

        <div className="project">
          <div className="sub-head">
            <h3>SQL For Data Science, Coursera</h3>
          </div>
        </div>

        <div className="project">
          <div className="head-button">
            <h3 className="sub-head">Training Certificate</h3>
            <button
              className="show-certificate-btn"
              onClick={handleShowCertificate}
            >
              Show Certificate
            </button>
          </div>
          {showCertificate && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={handleCloseCertificate}>
                  &times;
                </span>
                <img
                  className="certificate-image"
                  src={certi}
                  alt="Training Certificate"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Certificate;

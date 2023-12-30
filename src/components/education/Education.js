import React from "react";
import "./Education.css";
import Header from "../../header/Header";

function Education() {
  return (
    <div>
      <Header />
      <div>
        <h2 className="section-heading">Education</h2>
        <div className="project">
          <h3 className="project-heading">
            B.E. - Computer Engineering
          </h3>
          <p className="project-description">
            Ahmedabad Institute of Technology
            <br />
            CGPA: 8.01 / 10.00 | 2019-2023
          </p>
        </div>

        <div className="project">
          <h3 className="project-heading">
            <strong>12th Science</strong>
          </h3>
          <p className="project-description">
            Imperial Science School, Dhoraji
            <br />
            GSEB | Percentage: 82 / 100.00 | 2019
          </p>
        </div>

        <div className="project">
          <h3 className="project-heading">
            <strong>10th Grade</strong>
          </h3>
          <p className="project-description">
            BAPS Gurukul, Gondal
            <br />
            GSEB | Percentage: 79 / 100.00 | 2017
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;

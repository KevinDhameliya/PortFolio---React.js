import React from "react";
import Header from "../../header/Header";
import "./Experiance.css";

function Experience() {
  return (
    <div>
      <Header />
      <div className="experience-container">
        <h2 className="experience-heading">Experience</h2>
        <div className="project">
          <h3 className="project-heading">
            Rushkar Technology PVT LTD - Intern - 2019 - 2023
          </h3>
          <p className="description">
            I have done an Internship at Rushkar Technology PVT LTD in web
            development using .NET. In this internship, I have created one
            project using C#.
          </p>
        </div>

        <div className="project">
          <h3 className="project-heading">
            Wama Software - Intern - June 2023 - Current
          </h3>
          <p className="description">
            During my internship at Wama Software, I actively contributed to
            React Native projects, specifically focusing on ClassCare
            initiatives. I gained hands-on experience and honed my skills in
            React Native development while working on these projects.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;

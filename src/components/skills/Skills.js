import React from "react";
import "./Skills.css";
import Header from "../../header/Header";

function Skills() {
  const data = [
    "React Native",
    "HTML",
    "CSS",
    "JavaScript",
    "OOP",
    "Java",
    "C++",
    "SQL",
    "React",
    ".NET",
    "C#",
  ];

  return (
    <div>
      <Header />
      <div className="skillsContainer">
        <h2 className="heading">Skills</h2>
        <ul className="skillsList">
          {data.map((skill, index) => (
            <li key={index} className="skillItem">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;

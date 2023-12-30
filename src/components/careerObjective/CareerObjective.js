import React from 'react';
import Header from "../../header/Header";
import './ObjectiveStyle.css'; 

function CareerObjective() {
  return (
    <div>
    <Header />
    <div>
    <h2 className="heading">Career Objective</h2>
      <div className="project">
        <p className='description'>
          My objective is to become a full stack web developer that can meet all
          the requirements of the company and help the company to grow further.
          Seeking a challenging position in a reputed organization where I can
          learn new skills, expand my knowledge, and leverage my learnings.
        </p>
      </div>
    </div>
    </div>
  );
}

export default CareerObjective;

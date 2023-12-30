import React from "react";
import "./Project.css";
import Header from "../../header/Header";

function Project() {
  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="main-heading">Projects</h2>

        <div className="project">
          <div className="sub-head">
            <h3>Class-Care Application</h3>
          </div>
          <p className="description">
            In the ClassCare app, I played a key role in developing diverse
            modules. I contributed to enhancing functionality, user experience,
            and overall system efficiency. My work involved tackling specific
            challenges within each module, showcasing my adaptability and
            proficiency in React Native development.
          </p>
        </div>

        <div className="project">
          <h3 className="sub-head">Tax Invoice Generation using .NET MVC</h3>
          <p className="description">
            The tax invoice generation project in .NET MVC automates the
            creation of tax invoices, streamlining the process and ensuring
            accurate and compliant documentation for financial transactions.
          </p>
        </div>

        <div className="project">
          <h3 className="sub-head">
            Portfolio in React Native (App) and React (WebApp)
          </h3>
          <p className="description">
            I crafted a stylish portfolio app using React Native, TypeScript,
            JavaScript, and CSS. The app, compatible with iOS and Android,
            presents my projects in a user-friendly interface. It stands as a
            testament to my skills in mobile app development and showcases my
            commitment to innovative solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;

import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
    return (
        <div className="headerContainer">
            <div className="contentHeader">
                <Link to="/" className="header">Portfolio</Link>
            </div>
            <div>
            <ul className="contentContainer">
                <li className="headerSection">
                    <Link to="/CareerObjective" className="link">Career Objective</Link>
                </li>

                <li className="headerSection">
                    <Link to="/Skills" className="link">Skills</Link>
                </li>

                <li className="headerSection">
                    <Link to="/Education" className="link">Education</Link>
                </li>

                <li className="headerSection">
                    <Link to="/Experience" className="link">Experience</Link>
                </li>

                <li className="headerSection">
                    <Link to="/Certificate" className="link">Certificates</Link>
                </li>

                <li className="headerSection">
                    <Link to="/Project" className="link">Project</Link>
                </li>
            </ul>
            </div>

        </div>
    );
}

export default Header;

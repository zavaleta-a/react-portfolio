import React from "react";
import "./style.css";

function About() {
  return (
    <div className="viewThree" id="about">
      <div className="row">
        <div className="col-md about-left"></div>
      </div>
      <div className="col-md">
          <h2 className="viewTitle" id="aboutTitle">About</h2>
          <div className="row align-self-center bioText">
              <p className="bio">Fill in bio text here</p>
              <p className="bio"><span className="skills">Skill text here</span></p>
          </div>
      </div>
    </div>
  );
}

export default About;

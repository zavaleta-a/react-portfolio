import React from "react";
import NavBar from "../../components/navbar";
import "./style.css";
import { Link } from "react-scroll";

function Main() {
  return (
    <div className="row" id="/">
      <NavBar />

      <div className="col-md">
        <div className="titleName"></div>
        <div className="intro-text alignCenter">
          <h2 className="title-text">Alfredo Zavaleta</h2>
          <br></br>
          <h3 className="intro">Full Stack Developer</h3>
          <Link to="about" activeClass="active" spy={true} smooth={true}>
            <button type="button" className="readMore btn btn-info">
              Read More
            </button>
          </Link>
        </div>
      </div>
      <div className="col-md"></div>
    </div>
  );
}

export default Main;

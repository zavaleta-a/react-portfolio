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
          <Link to="about" activeClass="active" spy={true} smooth={true}></Link>
          <button type="button" className="readMore btn btn-info">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Main;

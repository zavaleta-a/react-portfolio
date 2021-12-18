import React from "react";
// import ContactForm from ""; // link contact form
import "./style.css";

function Contact() {
  return (
    <div className="viewFive" id="contact">
      <div className="row contact-row">
        <div className="formDiv" id="contact">
          <h2 className="viewTitle" id="contactTitle">
            Contact Me
          </h2>
          <div className="email">azavaleta07@gmail.com</div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm" />
        <div className="col-sm text-center">
          <a href="https://github.com/zavaleta-a" target="_blank">
            <i class="fab fa-github-square fa-3x" />
          </a>
          <a
            href="https://www.linkedin.com/in/alfredo-zavaleta-04978835"
            target="_blank"
          >
            <i class="fab fa-linkedin fa-3x" />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;

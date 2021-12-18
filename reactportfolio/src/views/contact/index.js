import React from "react";
import Links from "../../components/links";
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
          <Links />
        </div>
      </div>
    </div>
  );
}

export default Contact;

import React from "react";
import "./style.css";

function Links() {
  return (
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
          <i class="fab fa-linkedin fa-3x" />
        </a>
      </div>
      <div className="col-sm" />
    </div>
  );
}

export default Links;

import React from "react";
import "./style.css";
import { Link } from "react-scroll";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-md">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavMenu"
        aria-controls="navbarNavMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars fa-lg"></i>
      </button>
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarNavMenu"
      >
        <ul className="navbar-nav">
          <li className="nav-item navbar-text">
            <Link
              to="projects"
              className="nav-link"
              activeClass="active"
              spy={true}
              smooth={true}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item navbar-text">
            <Link
              to="about"
              className="nav-link"
              activeClass="active"
              spy={true}
              smooth={true}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

import React from "react";
import "./Navbar.scss";

function Navbar() {
  return (
    <div classname="navbarContainer">
      <input type="checkbox" className="checkbox-toggler" id="nav" />
      <label for="nav" class="nav-btn">
        <span className="nav-icon"></span>
      </label>
      <div className="nav-bg"></div>
      <nav className="navigation">
        <ul className="nav-list">
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#" className="nav-link">
            Resume
          </a>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

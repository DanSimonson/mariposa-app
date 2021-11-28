import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { NavLink, useNavigate } from "react-router-dom";
function Navbar() {
  let navigate = useNavigate();

  const navigateToRoute = (e) => {
    console.log("e ", e.target.innerText);
    if (e.target.innerText === "HOME") {
      navigate("/");
    } else if (e.target.innerText === "RESUME") {
      navigate("/resume");
    }
  };

  return (
    <div className="navbarContainer">
      <input type="checkbox" className="checkbox-toggler" id="nav" />
      <label for="nav" className="nav-btn">
        <span className="nav-icon"></span>
      </label>
      <div className="nav-bg"></div>
      <nav className="navigation">
        <ul className="nav-list">
          <li>
            <a
              href="#"
              className="nav-link"
              onClick={(e) => navigateToRoute(e)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="nav-link"
              onClick={(e) => navigateToRoute(e)}
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

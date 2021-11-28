import React from "react";
import "./Resume.scss";
import Navbar from "../../Components/Navbar/Navbar";
function Resume() {
  return (
    <>
      <Navbar />
      <div className="resumeContainer">
        <div className="spacer"></div>
        <div className="resumeTitle">
          <p>Software Engineer</p>
        </div>
        <div className="subTitle">
          <p>Professional Summary</p>
        </div>
        <ul>
          <li>Under Construction...</li>
        </ul>
      </div>
    </>
  );
}

export default Resume;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../data";
import Aos from "aos";
import "animate.css";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DisplayGrid from "../../Components/DisplayGrid/DisplayGrid";
import DisplayFooter from "../../Components/DisplayFooter/DisplayFooter";
import Carousel from "../../Components/Carousel/Carousel";
import Navbar from "../../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";

import {
  faGraduationCap,
  faBriefcase,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Home.scss";

function Home() {
  let navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    Aos.init({ duration: 2000 });
    const fetchData = async () => {
      const { data } = await axios.get("/api/projects");
      setProjects(data);
    };
    fetchData();
  }, []);

  const goToRoute = () => {
    navigate("/resume");
  };

  return (
    <>
      <Navbar />
      <div id="parent">
        <div className="name">mariposaweb.net</div>
        <div id="header" className="iconSize">
          <a href="https://github.com/DanSimonson/" target="blank">
            <div className="boxes bounceMeOne">
              <FontAwesomeIcon
                className="stayWhite"
                icon={faGithub}
              ></FontAwesomeIcon>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/dansimonsonmariposaweb/"
            target="blank"
          >
            <div className="boxes bounceMeTwo">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="stayWhite"
              ></FontAwesomeIcon>
            </div>
          </a>
          <a href="https://www.facebook.com/mariposaweb.net/" target="blank">
            <div className="boxes bounceMeThree">
              <FontAwesomeIcon
                icon={faFacebook}
                className="stayWhite"
              ></FontAwesomeIcon>
            </div>
          </a>
          <a href="https://twitter.com/simonsondan?lang=en" target="blank">
            <div className="boxes bounceMeFour">
              <FontAwesomeIcon
                icon={faTwitter}
                className="stayWhite"
              ></FontAwesomeIcon>
            </div>
          </a>
        </div>
        <div className="helloSection">
          <div id="left">
            <p>Hi. I’m Dan Simonson, nice to meet you.</p>
            <p>Please take a look around!</p>
          </div>
          <div id="right">
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations at mariposaweb.net
            </p>
          </div>
        </div>
        <div className="filler" onClick={goToRoute}>
          See Resume<span className="fillerSpan">@mariposaweb.net</span>
        </div>
      </div>
      <div className="wrapper">
        <div className="transition">Some Stuff About Me</div>
        <div className="about">
          <p align="center" data-aos="slide-right">
            About Dan Simonson
          </p>
          <p align="center" data-aos="slide-left">
            How does he know this stuff
          </p>
        </div>
        <div className="container">
          <div className="grid-item a" data-aos="zoom-in-up">
            <span>
              <FontAwesomeIcon
                style={{ color: "green" }}
                icon={faGraduationCap}
              >
                Education
              </FontAwesomeIcon>
              &nbsp; Education
            </span>
            <p className="pClass">
              I have an Associates in Programming and a Bachelor of Science in
              Computer Science (cum laude/3.65 GPA) as well as well as several
              Free Code Camp and HackerRank Certificates
            </p>
          </div>
          <div className="grid-item b" data-aos="zoom-in-up">
            <span>
              <FontAwesomeIcon
                style={{ color: "blue" }}
                icon={faBriefcase}
              ></FontAwesomeIcon>
              &nbsp; Skills
            </span>
            <p className="pClass">
              I enjoy bringing ideas to life in the browser. I am a full stack
              developer who is well versed in JavaScript, React, Node, CSS3 and
              their accompanying ecosystems.
            </p>
          </div>

          <div className="grid-item c" data-aos="zoom-in-up">
            <span>
              <FontAwesomeIcon
                style={{ color: "red" }}
                icon={faHeart}
              ></FontAwesomeIcon>
              &nbsp; Passion
            </span>
            <p className="pClass">
              Over the last several years I have invested thousands of hours
              honing my craft. I am perpetually working on improving my chops
              one problem at a time.
            </p>
          </div>
        </div>
        <DisplayGrid />
      </div>
    </>
  );
}

export default Home;

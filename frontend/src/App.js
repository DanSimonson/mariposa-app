import React, { useEffect, useState } from "react";
import axios from "axios";
import "./data";
import "./index.css";
import Aos from "aos";
import "animate.css";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

//comment.

function App() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    Aos.init({ duration: 2000 });
    const fetchData = async () => {
      const { data } = await axios.get("/api/projects");
      setProjects(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div id="parent">
        <div className="name">Dan Simonson @ mariposaweb.net</div>
        <div id="header" className="iconSize">
          <div className="boxes bounceMeOne">
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </div>
          <div className="boxes bounceMeTwo">
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          </div>
          <div className="boxes bounceMeThree">
            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
          </div>
          <div className="boxes bounceMeFour">
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          </div>
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
              {/*What would you do if you had
              a software expert available at your fingertips? */}
            </p>
          </div>
        </div>
        {/**data-aos="zoom-in-left" */}
        {/*className="fillerSpan"*/}
        <div className="filler">
          Software Engineer<span className="fillerSpan">@mariposaweb.net</span>
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
              Computer Science (cum laude/3.65 GPA) as well as a Free Code Camp
              Front End Certificate
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
              developer who is well versed in JavaScript, React, Vue, CSS3 and
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
      </div>
    </>
  );
}

export default App;

{
  /* <div className="container"> 

 <div className="grid-item a" data-aos="zoom-in-up">
            <span>
              <i class="fa fa-graduation-cap" aria-hidden="true"></i>Education{" "}
            </span>
            <p>
              {" "}
              I have an Associates in Programming and a Bachelor of Science in
              Computer Science (cum laude/3.65 GPA) as well as a Free Code Camp
              Front End Certificate
            </p>
          </div> 
 <div className="grid-item b" data-aos="zoom-in-up">
            <span>
              <i class="fa fa-briefcase" aria-hidden="true"></i> Skills
            </span>
            <p>
              I enjoy bringing ideas to life in the browser. I am a full stack
              developer who is well versed in JavaScript, React, Vue, CSS3 and
              their accompanying ecosystems.
            </p>
          </div> 

          
 <div className="grid-item c" data-aos="zoom-in-up">
            <span>
              <i class="fa fa-heart" aria-hidden="true"></i> Passion
            </span>
            <p>
              Over the last several years I have invested thousands of hours
              honing my craft. I am perpetually working on improving my chops
              one problem at a time.{" "}
            </p>
          </div> 

 </div>   */
}

{
  /* <main className="con">
      <div className="row center">
        {projects.map((project) => (
          <div key={project._id}>{project.name}</div>
        ))}
      </div>
      { <div style={{ height: "100%" }}> 
       <div id="header">
          <div className="boxes"></div>
        </div> 
      
        </div> 
        <div id="right">
          <p>
            I am passionate about building excellent software that improves the
            lives of those around me. I specialize in creating software for
            clients ranging from individuals and small-businesses all the way to
            large enterprise corporations. What would you do if you had a
            software expert available at your fingertips?
          </p>
        </div>
      </div>
       </div>  */
}
{
  /* <div className="wrapper">
        <div className="about"> */
}
/* <ScrollAnimation
            duration={5}
            initiallyVisible={true}
            animateIn="bounceInRight"
          > */
/* <p align="center" data-aos="slide-right">
            About Dan Simonson
          </p> */
/* </ScrollAnimation>
          <ScrollAnimation
            duration={5}
            initiallyVisible={true}
            animateIn="bounceInLeft"
          > */
/* <p align="center" data-aos="slide-left">
            How does he know this stuff
          </p> */
/* </ScrollAnimation> */
/* </div>
        <div className="container"> */
/* <ScrollAnimation duration={3} animateIn="rollIn"> */
/* <div className="grid-item a" data-aos="zoom-in-up">
            <span>
              <i class="fa fa-graduation-cap" aria-hidden="true"></i>Education{" "}
            </span>
            <p>
              {" "}
              I have an Associates in Programming and a Bachelor of Science in
              Computer Science (cum laude/3.65 GPA) as well as a Free Code Camp
              Front End Certificate
            </p>
          </div> */
// {/* </ScrollAnimation> */}
/* <ScrollAnimation duration={3} animateIn="rollIn"> */
/* <div className="grid-item b" data-aos="zoom-in-up">
            <span>
              <i class="fa fa-briefcase" aria-hidden="true"></i> Skills
            </span>
            <p>
              I enjoy bringing ideas to life in the browser. I am a full stack
              developer who is well versed in JavaScript, React, Vue, CSS3 and
              their accompanying ecosystems.
            </p>
          </div> */
/* </ScrollAnimation>
          <ScrollAnimation duration={3} animateIn="rollIn"> */
/* <div className="grid-item c" data-aos="zoom-in-up">
            <span>
              <i class="fa fa-heart" aria-hidden="true"></i> Passion
            </span>
            <p>
              Over the last several years I have invested thousands of hours
              honing my craft. I am perpetually working on improving my chops
              one problem at a time.{" "}
            </p>
          </div> */
/* </ScrollAnimation> */
/* </div> */
/* </div> */
/* </main>*/

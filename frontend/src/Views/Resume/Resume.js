import React from "react";
import "./Resume.scss";
import Navbar from "../../Components/Navbar/Navbar";
import DisplayFooter from "../../Components/DisplayFooter/DisplayFooter";

function Resume() {
  return (
    <>
      <Navbar />
      <div className="resumeContainer">
        <div className="resumeWrapper">
          <div className="spacer"></div>
          <div className="resumeTitle">
            <p>Software Engineer</p>
          </div>
          <div className="subTitle">
            <p>Professional Summary</p>
          </div>
          <ul>
            <li>
              <p>
                Over 20 years of IT experience which includes 5+ years of
                extensive experience as a Software Engineer using CSS,
                JavaScript, Vue and React.
              </p>
            </li>
            <li>
              <p>
                Specializing in MERN stack development with MongoDB, Express,
                Node and React
              </p>
            </li>
            <li>
              <p>Experience unit testing with Jest and React Testing Library</p>
            </li>
          </ul>
          <div className="subTitleSkills">
            <p>Skills</p>
          </div>
          <ul>
            <li>
              <p>Programming Languages: JavaScript</p>
            </li>
            <li>
              <p>Frameworks: React, Node.js, Express, Vue</p>
            </li>
            <li>
              <p>
                Web Technologies: CSS3, FlexBox, CSSGrid, SASS, HTML, Bootstrap,
                Materialize
              </p>
            </li>
            <li>
              <p>
                Developmnent Tools: Git, Github, Chrome Dev Tools, MongoDB,
                MySql, Jest, React Testing Library{" "}
              </p>
            </li>
            <li>
              <p>Methodoligies: Agile, Scrum, Kanban, Waterfall </p>
            </li>
          </ul>
          <div className="subTitleWork">
            <p>Work History</p>
          </div>
          <div className="work-title">
            <p>AllState, Palo Alto, CA</p>
            <p>Nov 2021 to present</p>
          </div>
          <ul>
            <li>
              <p>React Front End Developer</p>
            </li>
          </ul>
          <div className="work-title">
            <p>TCS(client Safeway), Austin, TX</p>
            <p>Feb 2021 to Nov 2021</p>
          </div>
          <ul>
            <li>
              <p>
                Designed, coded and maintained new features for using React,
                JavaScript, Node.JS and CSS. Created functional applications
                that feature user-friendly design and clear navigation for
                retail grocery store. Assisted in the development of
                applications and features that will be put on the website,
                utilized Redux, Thunk, JWT Authentication.
              </p>
            </li>
          </ul>
          <div className="work-title">
            <p>Matrix(client AuctionOS), Atlanta, GA</p>
            <p>Sep 2020 to Feb 2021</p>
          </div>
          <ul>
            <li>
              <p>
                Designed, coded and maintained new features for using HTML, CSS,
                JavaScript, Vue. Full-Stack Development with MySQL and Node.js
                Created functional applications that feature user-friendly
                design and clear navigation for online car auction software.
                Worked in small collaborative team to successfully deliver
                features Assist in the development of applications and features
                that will be put on the website.
              </p>
            </li>
          </ul>
          <div className="work-title">
            <p>Cognizant(client Bayer, Macys), Atlanta, GA</p>
            <p>Feb 2020 to Sep 2020</p>
          </div>
          <ul>
            <li>
              <p>
                Designed, coded and maintained new features for using HTML, CSS,
                React, Redux and JavaScript. Created functional applications
                that feature user-friendly design and clear navigation for
                software. Worked in teams using agile development with SCRUM
                methodology to successfully deliver features each sprint.
                Assisted in the development of applications and features that
                will be put on the website and in internal functions as well
                Implementing user interface components using React.js concepts
                and workflows.
              </p>
            </li>
          </ul>
          <div className="work-title">
            <p>Charter Global(client AuctionOS), Atlanta, GA</p>
            <p> Aug 2019 to Feb 2020</p>
          </div>
          <ul>
            <li>
              <p>
                Designed, coded and maintained rider portal using HTML, CSS,
                Vue, JavaScript, Node.js, Authentication, Full-Stack
                Development. Created functional applications that feature
                user-friendly design and clear navigation for transportation
                software. Worked in teams using agile development with SCRUM
                methodology to successfully deliver features each sprint Assist
                in the development of applications and features that will be put
                on the website and in internal functions as well Implementing
                user interface components using JavaScript and Vue.
              </p>
            </li>
          </ul>
          <div className="work-title">
            <p>Vasavah, Manila, Philippines</p>
            <p>Nov 2018 to June 2019</p>
          </div>
          <ul>
            <li>
              <p>
                Used React framework to create a React-draft-wysiwyg with a
                document control system with complete CRUD (create, read,
                update, delete) functionality. The application included login
                authentication which was created using Firestore authentication
                and allowed stakeholders to limit the document application
                access. Worked in teams using agile development with SCRUM
                methodology to successfully deliver features each sprint.
              </p>
            </li>
          </ul>
          <div className="work-title">
            <p>mariposaweb.net, Silang, Cavite Philippines</p>
            <p>Sep 2016 to Nov 2018</p>
          </div>
          <ul>
            <li>
              <p>
                Designed, coded and maintained websites and applications for
                clients from Businesses to Personal Websites using HTML, CSS,
                Vue, React, Firestore, Node.js, Authentication. Full-Stack
                Development creating functional applications that feature
                user-friendly design and clear navigation for websites
                Management Maintained client relationships while also managing
                project scope.
              </p>
            </li>
          </ul>
          <DisplayFooter />
        </div>
      </div>
      <div className="resumeContainerTwo"></div>
    </>
  );
}

export default Resume;

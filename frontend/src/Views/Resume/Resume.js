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
              <p>
                Frameworks: React, Node.js, Express, Vue, Bootstrap, Materialize
              </p>
            </li>
            <li>
              <p>
                Web Technologies: CSS3, FlexBox, CSSGrid, SASS, HTML, Redux,
                Thunk, Axios
              </p>
            </li>
            <li>
              <p>
                Developmnent Tools: Git, Github, Chrome Dev Tools, MongoDB,
                Mongoose, MySql, Jest, React Testing Library
              </p>
            </li>
            <li>
              <p>Methodoligies: Agile, Scrum, Waterfall </p>
            </li>
          </ul>
          <div className="subTitleWork">
            <p>Work History</p>
          </div>
          {/*<div className="work-title">
            <p>AllState, Palo Alto, CA</p>
            <p>Nov 2021 to present</p>
          </div>
          <ul>
            <li>
              <p>Technology Analyst</p>
            </li>
            <li>
              <p>
                Deliver high quality code. Lead validation for all types of
                testing and support activities related to implementation.
                Interface with key stakeholders and apply technical proficiency
                across different stages of the Software Development Life Cycle.
              </p>
            </li>
          </ul>*/}
          <div className="work-title">
            <p>TCS(client Safeway), Austin, TX</p>
            <p>Feb 2021 to Present</p>
          </div>
          <ul>
            <li>
              <p>Software Engineer</p>
            </li>
            <li>
              <p>
                Developing new user-facing features using React.js, JavaScript,
                Redux, Node.js, CSS. Translated designs and wireframes into
                high-quality code. Building reusable components and front-end
                libraries for future use. Optimized components for maximum
                performance. Utilized Redux, Thunk, JWT Authentication.
              </p>
            </li>
          </ul>
          <div className="work-title">
            <p>Matrix(client AuctionOS), Atlanta, GA</p>
            <p>Sep 2020 to Feb 2021</p>
          </div>
          <ul>
            <li>
              <p>Full-Stack Developer</p>
            </li>
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
              <p>Front-End Developer</p>
            </li>
            <li>
              <p>
                Designed, coded and maintained new features for using HTML, CSS,
                React, Redux, Thunk and JavaScript. Created functional
                applications that feature user-friendly design and clear
                navigation for software. Worked in teams using agile development
                with SCRUM methodology to successfully deliver features each
                sprint. Assisted in the development of applications and features
                that will be put on the website and in internal functions as
                well Implementing user interface components using React.js
                concepts and workflows.
              </p>
            </li>
          </ul>
          <div className="work-title">
            <p>Charter Global(client Routematch By Uber), Atlanta, GA</p>
            <p> Aug 2019 to Feb 2020</p>
          </div>
          <ul>
            <li>
              <p>Full-Stack Developer</p>
            </li>
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
              <li>
                <p>Front-End Developer</p>
              </li>
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
            <p>mariposaweb.net, Philippines</p>
            <p>Sep 2016 to Nov 2018</p>
          </div>
          <ul>
            <li>
              <p>Freelance Web Developer</p>
            </li>
            <li>
              <p>
                Designed, coded and maintained websites and applications for
                clients from Businesses to Personal Websites using HTML, CSS,
                Vue, React, Firestore, Node.js, Authentication. Full-Stack
                Development creating functional applications that feature
                user-friendly design and clear navigation for websites
                Management. Maintained client relationships while also managing
                project scope.
              </p>
            </li>
          </ul>
          <div className="education-title">
            <p>Education</p>
          </div>
          <ul>
            {/* <li>
              <p>Free Code Camp, Front End Libraries Certificate, 2019 </p>
            </li>
            <li>
              <p>Free Code Camp Front End Developer Certificate, 2018</p>
            </li> */}
            <li>
              <p>
                Bachelor of Science: Computer Science, Saint Martin’s
                University, Olympia Washington, 2004
              </p>
            </li>
            <li>
              <p>
                Associate of Science: Programming, Pierce College Fort
                Steilacoom, Lakewood, Washington, 2002
              </p>
            </li>
            <li>
              <p>
                Bachelor of Arts: Liberal Arts, Excelsior College, Albany, New
                York, 1997
              </p>
            </li>
          </ul>
          <div className="bottom-spacer"></div>
          <DisplayFooter />
        </div>
      </div>
      <div className="resumeContainerTwo"></div>
    </>
  );
}

export default Resume;

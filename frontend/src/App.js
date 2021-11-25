import React, { useEffect, useState } from "react";
import axios from "axios";
import "./data";
import "./index.css";
import Aos from "aos";
import "animate.css";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DisplayGrid from "./Components/DisplayGrid/DisplayGrid";
import DisplayFooter from "./Components/DisplayFooter/DisplayFooter";
//import { NavLink, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./Views/Home/Home";

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
  // useEffect(() => {
  //   Aos.init({ duration: 2000 });
  //   const fetchData = async () => {
  //     const { data } = await axios.get("/api/projects");
  //     setProjects(data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      {/*<div>navbar</div>*/}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/*<Route path="users/*" element={<Users />} />*/}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

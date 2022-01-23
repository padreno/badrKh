import React from "react";
import { ExperienceContainer } from "./Experience.style";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/js.png";
import bootstrap from "../assets/bootstrap.png";
import sass from "../assets/sass.png";
import react from "../assets/react.png";
import github from "../assets/github.png";
import git from "../assets/git.png";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Experience() {
  return (
    <ExperienceContainer id="experience">
      <h1>02. Experience</h1>
      <div className="experience__Container">
        <div>
          <p>
            I've been studying web development for more than a year now. And I
            am eager to learn more in this fast paced feild.
          </p>
        </div>
        <h2>SOME TECHNOLOGIES I'VE WORKED WITH:</h2>
        <div className="tech__Icons">
          <div className="tech__Icons__line1">
            <img src={html} alt="html" />
            <img src={css} alt="css" />
            <img src={javascript} alt="javascript" />
            <img src={bootstrap} alt="bootstrap" />
          </div>
          <div className="tech__Icons__line2">
            <img src={sass} alt="sass" />
            <img src={react} alt="reactjs" />
            <img src={github} alt="github" />
            <img src={git} alt="git" />
          </div>
        </div>
      </div>
      <a href="#projects" className="expandMoreicon">
        <ExpandMoreIcon />
      </a>
    </ExperienceContainer>
  );
}

export default Experience;

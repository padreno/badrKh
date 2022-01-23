import React from "react";
import { ProjectContainer } from "./Projects.style";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Projects() {
  return (
    <ProjectContainer id="projects">
      <h1>03.Projects</h1>
      <div className="projects__header">
        <h2>What I've done so far:</h2>
        <div className="projects__cards">
          <img src="https://picsum.photos/300/200?random=4" alt="" />
          <img src="https://picsum.photos/300/200?random=2" alt="" />
          <img src="https://picsum.photos/300/200?random=3" alt="" />
          <img src="https://picsum.photos/300/200?random=7" alt="" />
        </div>
      </div>
      <a href="#contact" className="expandMoreicon">
        <ExpandMoreIcon />
      </a>
    </ProjectContainer>
  );
}

export default Projects;

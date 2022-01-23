import React from "react";
import { Container } from "./About.style";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function About() {
  return (
    <Container id="about">
      <div className="about">
        <h1>01. About Me</h1>
        <div className="about__container">
          <div className="about__Me">
            <p>
              Hello! My name is Badr and I am a front end web developer. I am about to finish React web developmet course at ItAcademy by the end of January 2021. My passion about web development go back in 2018 when I was building webpages using wordpress, Tweaking scripts to fit my landing pages.
              I found myself reading an endless amateur blogs. That's when I realized I can turn this passion into a profesion specializing in coincise tech. That's when I got a web dev course on Udemy and started playing with code for real. 
              Here are a few technologies and tool I’ve been working with:
            </p>
            <div className="skills">
              <ul className="skills-list1">
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>Html</li>
              </ul>
              <ul className="skills-list2">
                <li>Css</li>
                <li>Bootstrap</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
          <img
            src="https://avatars.githubusercontent.com/u/64600480?v=4"
            alt="badr Khouzima"
          />
        </div>
      </div>
    <a href="#experience" className="expandMoreicon"><ExpandMoreIcon /></a>  
    </Container>
  );
}

export default About;

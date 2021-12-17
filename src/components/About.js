import React from "react";
import { Container } from "./About.style";

function About() {
  return (
    <Container>
      <div className="about">
        <h1>About Me</h1>
        <div className="about__container">
        <div className="about__Me">
          <p>
            Hello! My name is Badr and I am a front end web developer. I am
            about to finish a Recat web developmet course at ItAcademy. I
            discoved my passion about programming while i was bulding web pages
            using wordpress, diving into scripts I couldnt figure out what
            details in them Here I am a web developer aspiring to translate my
            ideas into coded web Apps. creating things that Here are a few
            technologies and tool I’ve been working with:
          </p>
          <ul className="skills-list">
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Html</li>
            <li>Css</li>
            <li>Bootstrap</li>
            <li>Git</li>
          </ul>
        </div>
        <img
          src="https://avatars.githubusercontent.com/u/64600480?v=4"
          alt="badr Khouzima"
        />
        </div>
      </div>
    </Container>
  );
}

export default About;

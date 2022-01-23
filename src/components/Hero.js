import React from "react";
import { HeroSection } from "./Hero.style.js";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function Hero() {
  return (
    <HeroSection>
      <div className="homePage__bio">
        <h1>Hi, my name is</h1>
        <h2>Badr Khouzima.</h2>
        <h3>I build things for the web. </h3>
        <p>
          Started as a self-taught to build thing on the web. Now being trained
          to build SPA with React. I intruduce myself to the tech industry after
          proper training at ITAcademy.
        </p>
      </div>
      <a href="#about" className="expandMoreicon">
        <ExpandMoreIcon />
      </a>
    </HeroSection>
  );
}

export default Hero;

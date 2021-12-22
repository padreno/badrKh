import React from "react";
import logo from "../assets/logo-transparent-white-30pt.png";
import { HeaderStyled } from "./Header.style.js";
//import { Link } from "react-router-dom";
//import Resume from "./Resume"
//import MenuIcon from "@mui/icons-material/Menu";
function Header() {
  return (
    <HeaderStyled>
      <div className="container">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <nav className="header">
        <img className="header__Logo" src={logo} alt="" />
        <div className="header__Menu">
          <ol className="header__Menu__List">
            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#about">Experience</a>
            </li>

            <li>
              <a href="#about">projects</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ol>

          <a href="/resume.pdf" target="_blank">

          <button className="resume__button">Resume</button>

          </a>
        </div>
      </nav>
    </HeaderStyled>
  );
}

export default Header;

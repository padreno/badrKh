import React, { useState, useEffect } from "react";
import logo from "../assets/B2logo.svg";
import { HeaderStyled } from "./Header.style.js";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [showNav, setShowNav] = useState(true);

  const controlNavBar = () => {
    if (window.scrollY > 81) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavBar);
    return () => {
      window.removeEventListener("scroll", controlNavBar);
    };
  }, []);

  const hamburg__Menu = () => {
    setToggle(!toggle);
  };

  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <HeaderStyled>
      {showNav && (
        <nav className="header">
          <img
            onClick={handleLogoClick}
            className="header__Logo"
            src={logo}
            alt="letter B"
          />
          <div
            className={
              toggle ? "hamburger is-active header__Menu" : "header__Menu"
            }
          >
            <ol className="headerMenu__List">
              <li>
                <HashLink smooth to="#about">
                  About
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="#experience">
                  Experience
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="#projects">
                  projects
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="#contact">
                  Contact
                </HashLink>
              </li>
            </ol>
            <Link
              className="resume__button"
              to="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Link>
          </div>
          <div
            className={toggle ? "hamburger is-active" : "hamburger"}
            onClick={hamburg__Menu}
          >
            <span className="bar1"></span>
            <span className="bar2"></span>
            <span className="bar3"></span>
          </div>
        </nav>
      )}
    </HeaderStyled>
  );
}

export default Header;

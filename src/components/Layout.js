import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Styled from "styled-components";

const LayoutContainer = Styled.div` 
   
`;

function Layout({ toggle, setToggle }) {
  return (
    <LayoutContainer>
      <Header setToggle={setToggle} toggle={toggle} />
      <Hero toggle={toggle} />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </LayoutContainer>
  );
}

export default Layout;

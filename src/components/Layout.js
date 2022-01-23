import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Styled from "styled-components";

const LayoutContainer = Styled.div` 
      /* height: 100vh; */
`;

function Layout() {
  return (
    <LayoutContainer>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </LayoutContainer>
  );
}

export default Layout;

import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Resume from "./components/Resume";
function App() {
  return (
    <div className="App">
      {/* <div className="NavHome__Background"> </div> */}
      <Header />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
      {/* <Resume /> */}
    </div>
  );
}

export default App;

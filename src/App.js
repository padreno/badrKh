import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="NavHome__Background">
        <Header />
        <Home />
        <About />
      </div>
      {/* Learning */}
      {/* projects */}
      {/* Contact */}
      {/* footer */}
    </div>
  );
}

export default App;

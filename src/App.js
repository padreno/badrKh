import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";
import LogoName from "./components/LogoName";
import Resume from "./components/Resume";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("This will run after 1 second!");
      setLoading(false);
    }, 1300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {loading && <Route path="/" element={<LogoName />} />}
          <Route
            path="/"
            element={<Layout setToggle={setToggle} toggle={toggle} />}
          />
          <Route path="/resume.pdf" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

import React from "react";
import { HomePage } from "./Home.style.js";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function Home() {
  return (
    <HomePage>
      <div className="homePage__bio">
        <h1>Badr Khouzima.</h1>
        <h2>I build things for the web. </h2>
        <p>
          I am a React web developer, specializing in building React web Apps
        </p>
        
      </div>
      <ExpandMoreIcon className="expandMoreicon"/>
    </HomePage>
  );
}

export default Home;

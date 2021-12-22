import React from 'react'
//import {Link} from "react-router-dom"
function Resume() {
    return (
      <div>
        {/* <Link to="/resume.pdf"> */}
          <object
            data={require("../assets/resume.pdf")}
            type="application/pdf"
            width="100%"
            height="100vw%"
          >
            hi
          </object>
        {/* </Link> */}
      </div>
    );
}

export default Resume

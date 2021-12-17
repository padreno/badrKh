import React from 'react'
import logo from "../assets/logo-transparent-white-30pt.png"
import {HeaderStyled} from "./Header.style.js"
// import {Link} from "react-router-dom";
function Header() {
    return (
       <HeaderStyled>
           <nav className="header">
               <img className="header__Logo" src={logo} alt="" />
               <ul className="header__Menu">
                   <li>01.About</li>
                   <li>02.Experience</li>
                   <li>03.projects</li>
                   <li>04.Contact</li>
                   <li>05.Resume</li>
               </ul>
           </nav>
       </HeaderStyled>
    )
}

export default Header

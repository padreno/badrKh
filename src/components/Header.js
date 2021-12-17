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
                   <li>About</li>
                   <li>Experience</li>
                   <li>projects</li>
                   <li>Contact</li>
               </ul>
           </nav>
       </HeaderStyled>
    )
}

export default Header

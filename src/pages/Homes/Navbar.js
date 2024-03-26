import React from 'react'
import { useState, useEffect } from "react"
// import { NavLink } from 'react-router-dom'
import { Link} from "react-scroll"
// import Home from "./Home"
// import About from "./About"
// import Projects from "./Projects"


function Navbar() {
  const [navActive, setNavActive] = useState(false);

  // Toggle navigation menu
  const toggleNav = () => {
    setNavActive(!navActive);
  };

  // Close navigation menu
  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return(
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        
        <Link to="homeSection" className="header-logo">
          <img src=".\img\logo.png" alt="closing tag" width={30}/>
        </Link>
        
      </div>
      <a className={`nav_hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
        <span className="nav_hamburger_line"></span>
        <span className="nav_hamburger_line"></span>
        <span className="nav_hamburger_line"></span>
      </a>
      <div className={`navbar_items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link onClick={closeMenu} activeClass="navbar_active_content" spy={true} smooth={true} offset={-70} duration={500} to="homeSection" className="navbar_content ">Home</Link>
          </li>
          <li>
            <Link onClick={closeMenu} activeClass="navbar_active_content" spy={true} smooth={true} offset={-70} duration={500} to="about" className="navbar_content ">About Me</Link>
          </li>
          <li>  
            <Link onClick={closeMenu} activeClass="navbar_active_content" spy={true} smooth={true} offset={-70} duration={500} to="MyPortfolio" className="navbar_content ">My Portfolio</Link>
          </li>
        </ul>
      </div>
      <Link onClick={closeMenu} activeClass="navbar_active_content" spy={true} smooth={true} offset={-70} duration={500} to="contact" className="btn btn_outline_primary">Contact Me</Link>
    </nav>

  )
}

 


export default Navbar
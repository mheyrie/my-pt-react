import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link} from "react-scroll"
import Home from "./Home"
import About from "./About"
import Projects from "./Projects"


function Navbar() {
  return (
       <nav className="navbar">
            <div className="nav_container">
              <div>
                logo
              </div>
              <ul className="nav_menu">
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
              </ul>
            </div>
        </nav>
  )   
}


export default Navbar
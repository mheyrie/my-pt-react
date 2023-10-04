import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
       <nav>
            <NavLink exact = "true" to="/">HOME</NavLink>
            <NavLink to="/about">ABOUT</NavLink>
            <NavLink to="/projects">PROJECTS</NavLink>
        </nav>
  )   
}


export default Navbar
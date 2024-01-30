import React from 'react'

import MySkills from "../MySkills"
import About from "../About"
import Home from "../Home"
import Portfolio from "../Portfolio"
import ContactMe from "../ContactMe"
import Footer from "../Footer"



function index() {
  return (
    <>
      <Home/>
      <MySkills/>
      <About/>
      <Portfolio/>
      <ContactMe/>
      <Footer/>
    </>
  )
}

export default index
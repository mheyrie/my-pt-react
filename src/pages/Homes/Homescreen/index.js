import React from 'react'

import MySkills from "../MySkills"
import About from "../About"
import Home from "../Home"
import Portfolio from "../Portfolio"
import ContactMe from "../ContactMe"



function index() {
  return (
    <>
      <Home/>
      <MySkills/>
      <About/>
      <Portfolio/>
      <ContactMe/>
    </>
  )
}

export default index
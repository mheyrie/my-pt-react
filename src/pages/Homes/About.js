import React, { useEffect } from 'react'
import {scrollEffect} from './Scroll' 

function About() {

  useEffect(() => {
    scrollEffect()
  },[])


  return (
    <section className="about_section" id="about">
      <div className="about_section_img">
        <img src=".\img\mypic.JPG" alt="my picture" data-aos="fade-up"/>
      </div>
      <div className="about_section_box" data-aos="fade-down">
        <div className="about_section_content">
          <h2 className="about_section_heading">About me</h2>
          <p className="about_section_description"> 
          I'm Mary Oladele, a Full Stack Developer with a passion for Excellence. I have a background in Electrical Electronics Engineering and Metallurgy(Gold Mining), I've immersed myself in learning both Frontend and Backend technologies while working on collaborative and personal projects along the way.
          </p>
          <p className="about_section_description">My mission is to leverage my skills in other create robust, scalable, and user-friendly applications with the use of latest technologies and best practices. I aim to deliver high-quality solutions that meet the needs of clients and users alike. I am committed to continuous improvement and innovation, with a focus on contributing to the success of projects and driving positive outcomes for businesses and end-users.</p>
          <p className="about_section_description">
          Outside of coding, you'll find me learning Spanish, Reading, or playing Piano. I enjoy spending time at the beach and love traveling. Fun fact: I love coding.

          Let's connect! via <a className="about-linkedin" href="https://linkedin.com/in/oladele-mary"> LinkedIn </a>. I look forward to hearing from you! </p>

          {/* <h3>Links</h3>
          <a href="https://github.com/mheyrie">Github</a>
  */}
        </div>
      </div>
    </section>
  )
}

export default About
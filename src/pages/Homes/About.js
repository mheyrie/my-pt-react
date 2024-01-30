import React from 'react'

function About() {
  return (
    <section className="about_section" id="about">
      <div className="about_section_img">
        <img src=".\img\mypic.JPG" alt="my picture" />
      </div>
      <div className="about_section_box">
        <div className="about_section_content">
          <h2 className="about_section_heading">About me</h2>
          <p className="about_section_description"> 
          I'm Mary Oladele, a Full Stack Developer with a passion for Excellence. With a background in Electrical Electronics Engineering and basic knowledge of Metallurgy(Gold Mining), I've recently transitioned into Full Stack Development. Over the past few months, I've immersed myself in learning both Frontend and Backend technologies, working on collaborative and personal projects along the way.


          </p>
          <p className="about_section_description">My mission is to leverage my skills in both front-end and back-end development to create robust, scalable, and user-friendly web applications. By embracing the latest technologies and best practices, I aim to deliver high-quality solutions that meet the needs of clients and users alike. I am committed to continuous improvement and innovation, with a focus on contributing to the success of projects and driving positive outcomes for businesses and end-users.</p>
          <p className="about_section_description">
          Outside of coding, you'll find me learning Spanish, Reading, or Knitting. I enjoy spending time at the beach and love traveling. Fun fact: I love coding.

          Ready to collaborate or want to learn more? Let's connect! Explore my portfolio to see some of my latest projects, or reach out via <a href="https://linkedin.com/in/oladele-mary">LinkedIn</a>. I look forward to hearing from you! </p>

          {/* <h3>Links</h3>
          <a href="https://github.com/mheyrie">Github</a>
  */}
        </div>
      </div>
    </section>
  )
}

export default About
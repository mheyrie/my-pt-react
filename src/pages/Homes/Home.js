import React, { useEffect } from 'react'
import {scrollEffect} from './Scroll' 

function Home() {

  useEffect(() => {
    scrollEffect()
  },[])


  return (
    <section className="home" id="homeSection">
      <div className="home_container">
        <div className="home_content">
          <div className="home_text">
            <p className="home_holla" data-aos="flip-right">👋Holla, I'm Mary</p>
            <h1 className="home_title">
            <span>Full Stack <br/>Developer</span>
            </h1>
            <p className="home_description" data-aos="zoom-in">
            I'm a passionate developer with a keen focus on web development. Armed with a blend of creativity and technical expertise, I specialize in Full Stack development. Whether it's crafting compelling designs, developing innovative solutions, problem-solving, or creating engaging content, I'm dedicated to delivering results that exceed expectations.
            Ready to bring your ideas to life? Let's collaborate and create something amazing together!    
            </p>
            <a href="https://linkedin.com/in/oladele-mary">
              <button className="btn git_btn">Get In Touch</button>
            </a>
          </div>
          <div className="home_img">
            <img src=".\img\banner1.png" alt="code" />
          </div>
        </div>
      </div>  
    </section>
  )
}

export default Home
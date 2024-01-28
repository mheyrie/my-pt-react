import React from 'react'

function Home() {
  return (
    <section className="home" id="homeSection">
      <div className="home_container">
        <div className="home_content">
          <div className="home_text">
            <p className="home_holla">👋Holla, I'm Mary</p>
            <h1 className="home_title">
            <span>Full Stack <br/>Developer</span>
            </h1>
            <p className="home_description">
            I'm a passionate developer with a keen focus on web development. Armed with a blend of creativity and technical expertise, I specialize in Full Stack development. Whether it's crafting compelling designs, developing innovative solutions, problem-solving, or creating engaging content, I'm dedicated to delivering results that exceed expectations.

I thrive on learning and adapting to new technologies, eager to utilize them in any organization I find myself in. Ready to bring your ideas to life? Let's collaborate and create something amazing together!    
            </p>
            <button className="btn git_btn">Get In Touch</button>
          </div>
          <div className="home_img">
            <img src="./img/side4.webp" alt="code" />
          </div>
        </div>
      </div>  
    </section>
  )
}

export default Home
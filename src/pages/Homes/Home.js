import React from 'react'

function Home() {
  return (
    <section className="home" id="homeSection">
      <div className="home_container">
        <div className="home_content">
          <div className="home_text">
            <p className="home_holla">Holla, I'm Mary</p>
            <h1 className="home_title">
            <span>Full Stack <br/>Developer</span>
            </h1>
            <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit beatae eveniet psum dolor sit.         
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
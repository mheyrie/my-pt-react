import React, { useEffect } from 'react'
import data from "../../data/index.json"
import {scrollEffect} from './Scroll' 


function Portfolio(){
  
  useEffect(() => {
    scrollEffect()
  },[])

  return (
    <div className="portfolio_section" id="MyPortfolio">
      <div className="portfolio_container_box">
        <div className="portfolio_container">
          <p className="sub_title">Recent Works</p>
          <h2 className="section_heading"> My Portfolio </h2>
        </div>
        <div>
        <button className="btn btn-github">
          <a href="https://github.com/mheyrie">🌐 Visit My GitHub</a>
        </button>
        </div>
      </div>
      <div className="portfolio_section_container">
        {data?.portfolio.map((item, index) => (
          <div key={index} className="portfolio_section_card" data-aos="fade-right">
            <div className="portfolio_section_img">
              <img src={item.src} alt="project snippets" />
            </div>
            <div className="portfolio_section_card_content">
              <div>
                <h3 className="portfolio_section_title">{item.title}</h3>
                <p className="portfolio_text">{item.description}</p>
              </div>
              {/* <p className="portfolio_link">{item.link}</p> */}
              <button className="btn portfolio_hosted_link">
                <a href={item.link} target="_blank">View Full Project</a>
              </button>
              
            </div>
          </div> 
        ))}
      </div>
    </div>
  )
  }

export default Portfolio
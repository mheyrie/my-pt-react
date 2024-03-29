import React, { useEffect } from 'react'
import data from "../../data/index.json"
import {scrollEffect} from './Scroll' 

function MySkills() {

  useEffect(() => {
    scrollEffect()
  },[])

  return (
    <section className="skills_section" id="mySkills">
      <div className="profolio_container">
        <h4 className="section_title">My Skills</h4>
        <h2 className="section_heading">My Expertise</h2>
      </div>
      <div className="skill_section_container">
        {data?.skills?.map(item => (
          <div key={item.id} className="skills_section_card" >
            <div className="skills_section_image"data-aos="flip-right">
              <img src={item.src} alt="Products" />
            </div>
            <div className="skills_section_card_content">
              <h3 className="skills_section_title">
                {item.title}
              </h3>
              {/* <p className="skills_section_description">{item.description}</p> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MySkills
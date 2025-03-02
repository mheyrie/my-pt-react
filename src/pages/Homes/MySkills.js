import React, { useEffect } from "react";
import data from "../../data/index.json";
import { scrollEffect } from "./Scroll";

function MySkills() {
  useEffect(() => {
    scrollEffect();
  }, []);

  return (
    <section className="skills_section" id="mySkills">
      <div className="profolio_container">
        <h4 className="section_title">My Skills</h4>
        <h2 className="section_heading">My Expertise</h2>
      </div>
      <div className="skill_section_container">
        {/* Frontend Skills */}
        <div className="skills_section_card">
          <h3 className="skills_section_title">Frontend Skills</h3>
          <ul className="skills_list">
            {data.skills.frontend.map((item) => (
              <li key={item.id} className="skills_list_item">
                <SkillIcon />
                {item.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Backend Skills */}
        <div className="skills_section_card">
          <h3 className="skills_section_title">Backend Skills</h3>
          <ul className="skills_list">
            {data.skills.backend.map((item) => (
              <li key={item.id} className="skills_list_item">
                <SkillIcon />
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// Reusable SVG Icon Component
const SkillIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-infinity"
  >
    <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z" />
  </svg>
);

export default MySkills;

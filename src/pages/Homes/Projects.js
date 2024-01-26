import React, { useEffect, useState } from 'react'


function Projects() {
const[projects, setProjects] = useState([])

useEffect(() =>{
  fetch("http://localhost:3000/projects")
  .then(res => res.json())
  .then(data => console.log(data))
}, [])

  return (
    <div className="projects" id="projects">
      Test
    </div>
  )
}

export default Projects
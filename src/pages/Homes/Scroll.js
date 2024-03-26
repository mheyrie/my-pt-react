// import React, { useEffect } from 'react'
// import AOS from 'aos'
// import 'aos/dist/aos.css'
// import MySkills from "./MySkills"

// function Scroll() {

//     const scrollEffect = useEffect(()=>{
//         AOS.init({duration: 2000})
//     },[])

//   return (
//     <div>
        
//         <MySkills scrollEffect={scrollEffect}/>
//     </div>
//   )
// }

// export default Scroll 

import AOS from 'aos'
import 'aos/dist/aos.css'


export const scrollEffect = ()=>{
    AOS.init({duration: 2000})
};
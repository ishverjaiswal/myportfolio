import React from 'react'
import "../styles/Project.css"
import zooimg1 from "../assets/zooimg1.png";
import zooimg2 from "../assets/zooimg2.png";
import zooimg3 from "../assets/zooimg3.png";
import reach from "../assets/reach.png";
const Project = () => {
  return (
  
<div id="Project">
     <div className="pro"><h1>My Project</h1></div>


    <div className="project-section">
    <div className="text-section">
      <div className="zoo">
        <h2>Kanpur Zoo</h2>
      </div>
      <div className="describe">
        The Kanpur Zoo website is an interactive platform designed to bring the entire zoo experience online. This website provides detailed information about the zoo's history, attractions, and exhibits.and it allow visitors to support the zoo through secure online donations.
      </div>
    </div>
    <div className="image-section">
      <img src={zooimg3} alt="Portfolio Logo" className="zooimg" />
      <img src={zooimg1} alt="Portfolio Logo" className="zooimg" />
      <img src={zooimg2} alt="Portfolio Logo" className="zooimg" />
      <img src={reach} alt="Portfolio Logo" className="zooimg" />

    </div>
  </div>
  </div>
  )
}

export default Project
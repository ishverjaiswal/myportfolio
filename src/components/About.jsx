import React from 'react'
import "../styles/About.css"
import myimage from "../assets/myimage.png"
const About = () => {
  return (
   
   <div id="About" className="about-me">
  <div className="illustration">
    <img src={myimage} alt="my-img" className="my-image" />
  </div>
  <div className="content">
    <h2 className="title">About Me</h2>
    <p className="description">
    Hi, I'm Ishver Chandra Jaiswal, a passionate webdeveloper, including React, Node.js, JavaScript, Python, C, and C++. I enjoy crafting seamless user experiences and robust functionalities. One of my notable projects is the Kanpur Zoo website, 

I am actively involved in the IEEE community, participating as a general member and contributing to the IEEE Aerospace and Electronic Systems Society Young Professionals (IEEE AESS YU). My core competencies lie in web development and staying current with the latest tech advancements.

In my free time, I enjoy playing cricket, volleyball, and badminton, as well as exploring new tech trends. Feel free to explore my portfolio and connect with me for potential collaborations. Let's create something amazing together! 🚀
    </p>
    
    </div>   
</div>



    
  )
}

export default About;
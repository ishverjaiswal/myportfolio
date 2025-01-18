import React from "react";
import "../styles/HeroSection.css"; 
import githublogo from "../assets/githublogo.png"
import instalogo from "../assets/instalogo.png"
import linklogo from "../assets/linklogo.png"

import resume from '../assets/resume.jpg'
const HeroSection = () => {
  return (
    <section id="HeroSection" className="hero-section">
      <div className="hero-content">
        <h1>
          Hi, I'm<br/> <span>Ishver Chandra Jaiswal</span>
        </h1>
        <h2>I am a Frontend Developer</h2>

        
       
        <div className="social-icons">
          <a href="https://github.com/ishverjaiswal?tab=repositories" target="_blank">
          <img src={githublogo} alt="Githublogo Logo" className="icon" />
          </a>
          <a href="https://www.instagram.com/madmax_ishu/" target="_blank" >
          <img src={instalogo} alt="Insta Logo"className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/ishver-chandra-jaiswal-6586492a9/?originalSubdomain=in" target="_blank" >
          <img src={linklogo} alt="Linkedin Logo" className="icon" />
          </a>
        </div>
           
           <div className="resbtn">
        <a href={resume} download="Ishver-Resume.jpg" >
      <button>My Resume</button>
    </a>
    </div>
      </div>
     
    </section>
  );
};

export default HeroSection;

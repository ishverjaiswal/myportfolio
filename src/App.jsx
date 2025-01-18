import { useState } from 'react'
import Navbar from "./components/Navbar"
import About from "./components/About"
import HeroSection from "./components/HeroSection"
import Project from "./components/Project"
import Feedback from "./components/Feedback"
import Skills from "./components/Skills"
import Cirtificates from "./components/Cirtificates"
import './App.css'


function App() {
 

  return (
    <>
   
   <Navbar/>
    <HeroSection/>
    <About/>
    <Skills/>
    <Project/>
    <Cirtificates/>
    <Feedback/>
    </>
  )
}

export default App

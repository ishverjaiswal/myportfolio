import React from 'react'
import '../styles/Cirtificates.css'
import infopython from "../assets/infopython.jpg";
import simppython from "../assets/simppython.jpg";
import simpreact from "../assets/simpreact.jpg";
import aess from "../assets/aess.png";
import IEEEpart from "../assets/IEEEpart.png";
import inforjs from "../assets/inforjs.jpg";
import infohtml from "../assets/infohtml.jpg";
import infocss from "../assets/infocss.jpg";
import VRwork from "../assets/VRwork.jpg";

const Cirtificates = () => {
  return (
    <div id="Cirtificates">

  <div className="cirt"><h1>Certificates</h1></div>

  <div className="cirtificate">
    <img src={inforjs} alt="Cirtificates" className="cirt-img" />
    <img src={infopython} alt="Cirtificates" className="cirt-img" />
    <img src={simpreact} alt="Cirtificates" className="cirt-img" />
    <img src={simppython} alt="Cirtificates" className="cirt-img" />
    <img src={aess} alt="Cirtificates" className="cirt-img" />
    <img src={infohtml} alt="Cirtificates" className="cirt-img" />
    <img src={infocss} alt="Cirtificates" className="cirt-img" />
    <img src={IEEEpart} alt="Cirtificates" className="cirt-img" />
    <img src={VRwork} alt="Cirtificates" className="cirt-img" />
    
    </div>



    </div>
  )
}

export default Cirtificates
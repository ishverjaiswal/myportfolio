import React, { useState } from 'react';  // Import useState
import gmail from "../assets/gmail.png"
import phone from "../assets/phone.png"
import location from "../assets/location.png"

import '../styles/Feedback.css'

const Feedback = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "1f995e6e-e032-408a-bf8d-e89fa0a8db66");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      console.log("Success", data);
      setResult(data.message);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="Contact">
      <h2 id="head">Contact</h2>
      <div className="contact">
        <div className="contact-col">
          
          <p>
        I'm currently available to take on new projects.So feel free to send me a message about anything that you want me to work on. you can contact anytime.<br/>
        <br/>
        <br/>
          </p>
          <ul>
            <li>
              <img src={gmail} alt="Envelope icon" /> ishverjaiswal40@gmail.com
            </li>
            <li>
              <img src={phone} alt="Phone icon" /> 7054188733
            </li>
            <li>
              <img src={location} alt="Location icon" /> Kanpur
            </li>
             </ul>
            
            <br/>
            <br/>
            
           
            
               
             

        </div>
       
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name="name" placeholder="Enter your name" required />
            <label>Email</label>
            <input type="tel" name="phone" placeholder="Enter your Email" required />
            <label>Write your messages here</label>
            <textarea name="message" rows="4" placeholder="Enter your message" required></textarea>
            <button type="submit" className="btn-dark-btn">
              Submit now 
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </div>
  );
}

export default Feedback;

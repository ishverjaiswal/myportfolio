import React, { useState } from 'react'; 
import { Link } from 'react-scroll'; 
import PORTFOLIO from "../assets/PORTFOLIO.png";
import "../styles/Navbar.css";

const Navbar = () => {
  
  const [menu, setMenu] = useState("");

  return (
    <nav id="Navbar" className="navbar">
      <div>
        <img src={PORTFOLIO} alt="Portfolio Logo" className="logo" />
      </div>
      <ul className="nav-menu">
        <li>
          <Link
            className="nav-item"
            to="Home"
            smooth={true}
            duration={500}
            onClick={() => setMenu("Home")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="nav-item"
            to="About"
            smooth={true}
            duration={500}
            offset={50}
            onClick={() => setMenu("About")}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="nav-item"
            to="Skills"
            smooth={true}
            duration={500}
            offset={50}
            onClick={() => setMenu("Skills")}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            className="nav-item"
            to="Project"
            smooth={true}
            duration={500}
            offset={50}
            onClick={() => setMenu("Project")}
          >
            Project
          </Link>
        </li>
        <li>
          <Link
            className="nav-item"
            to="Cirtificates"
            smooth={true}
            duration={500}
            offset={50}
            onClick={() => setMenu("Cirtificates")}
          >
            Certificates
          </Link>
        </li>
        <li>
          <Link
            className="nav-item"
            to="Contact"
            smooth={true}
            duration={500}
            offset={50}
            onClick={() => setMenu("Contact")}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (
      <header>
        
      <ul id="navbar">
        <li className="nav_topic">
          <Link to="/Portfolio-REACT/">
            <button className="nav_button">About Me</button>
          </Link>
        </li>
        <li className="nav_topic">
          <Link to="/Portfolio-REACT/ProjectsPage">
            <button className="nav_button">Projects</button>
          </Link>
        </li>
        <li className="nav_topic">
          <Link to="/Portfolio-REACT/ContactPage">
            <button className="nav_button">Contact Me</button>
          </Link>
        </li>
      </ul>
  </header>
    );
}

export default Navbar;

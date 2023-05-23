
// import { ArrowRightIcon } from "@heroicons/react/solid";
import React from 'react';

function Navbar() {
    return (
      <header>
        
      {/* <!--navbar--> */}
      <ul id="navbar">
        <li class="nav_topic">
          <button class="nav_button">
          <a href="#about_me">About Me</a>
          </button>
        </li>
        <li class="nav_topic">
          <button class="nav_button">
          <a href="#project_big">Projects</a>
          </button>
        </li>
        <li class="nav_topic">
          <button class="nav_button">
          <a href="#contact_me">Contact Me</a>
          </button>
        </li>
        
      </ul>
  </header>
    );
}

export default Navbar;

// import { ArrowRightIcon } from "@heroicons/react/solid";
import React from 'react';
import { NavLink } from "react-router-dom";


function Navbar() {
    return (
      <header>
        
      {/* <!--navbar--> */}
      <ul id="navbar">
        <li class="nav_topic">
          <button class="nav_button">
          <a href="/">About Me</a>
          </button>
        </li>
        <li class="nav_topic">
          <button class="nav_button">
          <a href="/ProjectsPage">Projects</a>
          </button>
        </li>
        <li class="nav_topic">
          <button class="nav_button">
          <a href="/ContactPage">Contact Me</a>
          </button>
        </li>
        {/* <li>
          <a href="/pages/Homepage">About Me</a>
        </li>
        <li>
          <a href="/pages/ProjectsPage">Projects</a>
        </li>
        <li>
          <a href="/pages/ContactPage">Contact Me</a>
        </li> */}

      </ul>
  </header>
    );
}

export default Navbar;
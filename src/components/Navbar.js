import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import ProjectPage from '../pages/ProjectsPage';
import HomePage from '../pages/Homepage';
import ContactPage from '../pages/ContactPage';

function Navbar() {
    return (
      <header>
        
      {/* <!--navbar--> */}
      <ul id="navbar">
        <li class="nav_topic">
          <a href="/Portfolio-REACT/">
            {/* <Link to="/">About Me</Link> */}
            <button class="nav_button">About Me</button>
          </a>
        </li>
        <li class="nav_topic">
          <a href="/Portfolio-REACT/ProjectsPage">
            {/* <Link to="/ProjectsPage">Projects</Link> */}
            <button class="nav_button">Projects</button>
          </a>
        </li>
        <li class="nav_topic">
          <a href="/Portfolio-REACT/ContactPage">
            {/* <Link to="/ContactPage">Contact Me</Link> */}
            <button class="nav_button">Contact Me</button>
          </a>
        </li>
      </ul>
      {/* <Routes>
        <Route exact path="/" component={HomePage} />
        <Route path="/ProjectsPage" component={ProjectPage} />
        <Route path="/ContactPage" component={ContactPage} />
      </Routes> */}
  </header>
    );
}

export default Navbar;

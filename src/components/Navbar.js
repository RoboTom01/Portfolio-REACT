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
          <button class="nav_button">
            {/* <Link to="/">About Me</Link> */}
            <a href="/Portfolio-REACT/">About Me</a>
          </button>
        </li>
        <li class="nav_topic">
          <button class="nav_button">
            {/* <Link to="/ProjectsPage">Projects</Link> */}
            <a href="/Portfolio-REACT/ProjectsPage">Projects</a>
          </button>
        </li>
        <li class="nav_topic">
          <button class="nav_button">
            {/* <Link to="/ContactPage">Contact Me</Link> */}
            <a href="/Portfolio-REACT/ContactPage">Contact Me</a>
          </button>
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

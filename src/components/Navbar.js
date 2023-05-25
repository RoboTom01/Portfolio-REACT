import React from 'react';
// import { Routes, Route, Link } from "react-router-dom";
import { Link } from "react-router-dom";
import ProjectPage from '../pages/ProjectsPage';
import HomePage from '../pages/Homepage';
import ContactPage from '../pages/ContactPage';

function Navbar() {
  // const path = window.location.pathname
    return (
      <header>
        
      {/* <!--navbar--> */}
      <ul id="navbar">
        <li className="nav_topic">
          <Link to="/">
            {/* <Link to="/">About Me</Link> */}
            <button className="nav_button">About Me</button>
          </Link>
        </li>
        <li className="nav_topic">
          <Link to="/ProjectsPage">
            {/* <Link to="/ProjectsPage">Projects</Link> */}
            <button className="nav_button">Projects</button>
          </Link>
        </li>
        <li className="nav_topic">
          <Link to="/ContactPage">
            {/* <Link to="/ContactPage">Contact Me</Link> */}
            <button className="nav_button">Contact Me</button>
          </Link>
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

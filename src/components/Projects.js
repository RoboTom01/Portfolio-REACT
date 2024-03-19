import React from 'react';
import Footer from './Footer';


function Projects() {
    return (
      <div>
        <ul id="projects">
          <a href="https://github.com/RoboTom01/Business-Portfolio-Sample-Site">
            <li id="Match" className="project_small">
                <div className="project_text link">HUGO Portfolios (WIP)</div>
            </li>
          </a>
          <a href="https://hogar-bazaar.herokuapp.com/category/7">
            <li id="Hogar" className="project_small">
                <div className="project_text link">Hogar Bazaar</div>
            </li>
          </a>
          <a href="https://newguyengithub.github.io/Recovery-Radar/">
            <li id="Rec" className="project_small">
                <div className="project_text link">Recovery Radar</div>
            </li>
          </a>
          <a href="https://robotom01.github.io/Weather-Dashboard/">
            <li id="Weather" className="project_small">
                <div className="project_text link">Weather Dashboard</div>
            </li>
          </a>
          <a href="https://roboTom01.github.io/password_generator">
            <li id="Password" className="project_small">
                <div className="project_text link">Password Generator</div>
            </li>
          </a>
          <a href="https://github.com/RoboTom01/Team-Profile-Generator">
            <li id="Team" className="project_small">
                <div className="project_text link">Team Profile Generator</div>
            </li> 
          </a>
        </ul>
        <Footer />
      </div>
    );
  }


export default Projects;
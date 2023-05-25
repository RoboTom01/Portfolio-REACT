import React from 'react';
import Footer from './Footer';


function Projects() {
    return (
      <div>
        <ul id="projects">
        <li id="Match" className="project_small">
              <a className="project_text link" href="https://pure-spire-26458.herokuapp.com/">Match Point (WIP)</a>
          </li>
          <li id="Hogar" className="project_small">
              <a className="project_text link" href="https://hogar-bazaar.herokuapp.com/category/7">Hogar Bazaar</a>
          </li>
          <li id="Rec" className="project_small">
              <a className="project_text link" href="https://newguyengithub.github.io/Recovery-Radar/">Recovery Radar</a>
          </li>
          <li id="Weather" className="project_small">
              <a className="project_text link" href="https://robotom01.github.io/Weather-Dashboard/">Weather Dashboard</a>
          </li>
          <li id="Password" className="project_small">
              <a className="project_text link" href="https://roboTom01.github.io/password_generator">Password Generator</a>
          </li>
          <li id="Team" className="project_small">
              <a className="project_text link" href="https://github.com/RoboTom01/Team-Profile-Generator">Team Profile Generator</a>
          </li> 
        </ul>
        <Footer />
      </div>
    );
  }


export default Projects;
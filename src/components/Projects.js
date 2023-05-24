import React from 'react';
import Footer from './Footer';


function Projects() {
    return (
      <div>
        <ul id="projects">
        <li id="Match" class="project_small">
              <a class="project_text link" href="https://github.com/JSheen98/match-point">Match Point (WIP)</a>
          </li>
          <li id="Hogar" class="project_small">
              <a class="project_text link" href="https://hogar-bazaar.herokuapp.com/category/7">Hogar Bazaar</a>
          </li>
          <li id="Rec" class="project_small">
              <a class="project_text link" href="https://newguyengithub.github.io/Recovery-Radar/">Recovery Radar</a>
          </li>
          <li id="Weather" class="project_small">
              <a class="project_text link" href="https://robotom01.github.io/Weather-Dashboard/">Weather Dashboard</a>
          </li>
          <li id="Password" class="project_small">
              <a class="project_text link" href="https://roboTom01.github.io/password_generator">Password Generator</a>
          </li>
          <li id="Team" class="project_small">
              <a class="project_text link" href="https://github.com/RoboTom01/Team-Profile-Generator">Team Profile Generator</a>
          </li> 
        </ul>
        <Footer />
      </div>
    );
  }


export default Projects;
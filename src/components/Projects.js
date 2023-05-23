import React from 'react';
// import { projectsData } from './ProjectsData';


function Projects() {
    return (
      <div>
        <ul id="projects">
          <li id="Hogar" class="project_small">
              <a class="project_text link" href="https://hogar-bazaar.herokuapp.com/category/7">Hogar Bazaar</a>
          </li>
          <li id="Rec" class="project_small">
              <a class="project_text link" href="https://newguyengithub.github.io/Recovery-Radar/">Recovery Radar</a>
          </li>
          <li id="Cal" class="project_small">
              <a class="project_text link" href="">Calculator</a>
          </li>
          <li id="Past" class="project_small">
              <a class="project_text link" href="">Pastel Puzzles</a>
          </li>
          <li id="Run" class="project_small">
              <a class="project_text link" href="">Run Buddy</a>
          </li> 
          <li id="" class="project_small">
              <a class="project_text link" href="">BLANK</a>
          </li>
        </ul>
      </div>
    );
  }


export default Projects;
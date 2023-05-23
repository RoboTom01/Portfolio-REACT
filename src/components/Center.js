import React from 'react';

function Center() {
    return (
        // <!-- CENTER -->

        <div class="column_center"> 
          <div id="about_me"></div>
          <div>
            <h3>BIO:</h3>
            <div id="bio">
              <p class="italic">Hi, I'm Thomas.</p>
              <p>I was born and raised in Utah and am jumping into the world of web development.</p>
              <p>I enjoy golf, skiing, gaming, and spending time with my dog.</p>
              <p>Before coding, I obtained an associate's degree in accounting.</p>
              <p>My hope is to obtain a solid career in web development, that gives me opportunities to grow and learn as the industry and field does.</p>
            </div>
          </div>
  
        {/* <!--Projects--> */}
  
          {/* <!--1st large project--> */}
          <div id="project_big">
            
            <a class="project_text link" href="https://hogar-bazaar.herokuapp.com/category/7">Hogar Bazaar</a>
            
          </div>
        {/* <!--four project to be smaller and change orientation on smaller page--> */}
            <div>
              <ul id="projects">
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
              </ul>
            </div>
  
        </div>
    );
}

export default Center



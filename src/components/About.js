import React from 'react';


function About() {
    return (
        // About Me
        <div>
          <div id="about_me">
            <h3>BIO:</h3>
            {/* <div>
              <img id="profile_pic" src="./assets/images/profilepic.jpg" alt="me"></img>
            </div> */}
            <div id="bio">
              <p class="italic">Hi, I'm Thomas.</p>
              <p>•</p>
              <p>I was born and raised in Utah and am jumping into the world of web development.</p>
              <p>I enjoy golf, skiing, gaming, and spending time with my dog.</p>
              <p>•</p>
              <p>My Certifications:</p>
              <ul id='certification' class='row'>
                <ul class='list-left'>
                  <li>Associate's Degree in Accounting</li>
                  <li>Quickbooks Desktop Certified</li>
                  <li>Microsoft Office Specialist Excel 2016</li>
                  <li>Desktop Pro Certifaction (IT)</li>
                </ul>
                <ul class='list-right'>
                  <li> • Ensign College</li>
                  <li> • Intuit</li>
                  <li> • Microsoft</li>
                  <li> • TestOut</li>
                </ul>
              </ul>
              <p>•</p>
              <p>My hope is to obtain a solid career in web development, that gives me opportunities to grow and learn as the industry and field does.</p>
              <p>Currently, I am interested in becoming proficent in front-end development with tools such as React.</p>
              <p>•</p>
            </div>
          </div>
        </div>
    );
}

export default About;
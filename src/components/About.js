import React from 'react';
import Footer from './Footer';
import profilepic from '../profilepic.jpg';

function About() {
    return (
        <div>
          <div id="about_me">
            <h3></h3>
            <div id="bio">
              <p className="italic">Hi, I'm Thomas.</p>
              <p>•</p>
              <p>I was born and raised in Utah and am jumping into the world of web development.</p>
              <p>I enjoy golf, skiing, gaming, and going places with my dog.</p>
              <p>•</p>
              <p>My Certifications:</p>
              <ul id='certification' className='row'>
                <ul className='list-left'>
                  <li>Full Stack Web Development (WIP)</li>
                  <li>Associate's Degree in Accounting</li>
                  <li>Quickbooks Desktop Certified</li>
                  <li>Microsoft Office Specialist Excel 2016</li>
                  <li>Desktop Pro Certification (IT)</li>
                </ul>
                <ul className='list-right'>
                  <li> • University of Utah</li>
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
          <Footer />
          <img id="profile_pic" src={profilepic.jpg} alt="me"></img>
        </div>
    );
}

export default About;
import React from 'react';
// import AppCSS from './App.css';
import Navbar from'../my-app/src/components/Navbar';
import BackgroundPic from '../my-app/src/components/BackgroundPic';
import About from '../my-app/src/components/About';
import Projects from '../my-app/src/components/Projects';
import Contact from '../my-app/src/components/Contact';
// import './components/ProjectsData';


function App() {
    return (
        <main>
            <Navbar />
            <BackgroundPic />
            <About />
            <Projects />
            <Contact />
        </main>
    );
  }
  


export default App;
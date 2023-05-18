import React from 'react';
// import AppCSS from './App.css';
import Navbar from'./components/Navbar';
import BackgroundPic from './components/BackgroundPic';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
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
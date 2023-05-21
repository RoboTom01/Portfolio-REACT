import logo from './logo.svg';
import './App.css';
import React from 'react';
// import AppCSS from './App.css';
import Navbar from'../src/components/Navbar';
import BackgroundPic from '../src/components/BackgroundPic';
import About from '../src/components/About';
import Projects from '../src/components/Projects';
import Contact from '../src/components/Contact';
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

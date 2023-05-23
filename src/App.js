import logo from './logo.svg';
import './App.css';
import React from 'react';
// import AppCSS from './App.css';
import Navbar from'../src/components/Navbar';
import BackgroundPic from '../src/components/BackgroundPic';
import About from '../src/components/About';
import Projects from '../src/components/Projects';
// import Contact from '../src/components/Contact';
// import Columns from './components/columns';
import Footer from './components/Footer';
// import './components/ProjectsData';

function App() {
  return (
      <main> 
        <Navbar />
        <BackgroundPic />
        <About />
        <Projects />
        <Footer />
      </main>
  );
}

export default App;

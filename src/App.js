// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AppCSS from './App.css';
import Navbar from'../src/components/Navbar';
import BackgroundPic from '../src/components/BackgroundPic';
// import About from '../src/components/About';
// import Projects from '../src/components/Projects';
// import Contact from '../src/components/Contact';
// import Columns from './components/columns';
// import Footer from './components/Footer';
import HomePage from './pages/Homepage';
import ContactPage from './pages/ContactPage';
import ProjectPage from './pages/ProjectsPage';
// import './components/ProjectsData';

function App() {
  let component
  switch (window.location.pathname) {
    case "/Portfolio-REACT/":
      component = <HomePage />
      break
    case "/ProjectsPage":
      component = <ProjectPage />
      break
    case "/ContactPage":
      component = <ContactPage />
      break
  }
  return (
      <main> 
        <Navbar />
        <BackgroundPic />
        {component}
        {/* <Footer /> */}
      </main>
  );
}

export default App;

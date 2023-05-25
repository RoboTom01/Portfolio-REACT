import './App.css';
import React from 'react';
import { HashRouter } from "react-router-dom";
import Navbar from'../src/components/Navbar';
import BackgroundPic from '../src/components/BackgroundPic';
import HomePage from './pages/Homepage';
import ContactPage from './pages/ContactPage';
import ProjectPage from './pages/ProjectsPage';

function App() {
  let component
  switch (window.location.pathname) {
    case "/Portfolio-REACT/":
      component = <HomePage />
      break;
    case "/Portfolio-REACT/ProjectsPage":
      component = <ProjectPage />
      break;
    case "/Portfolio-REACT/ContactPage":
      component = <ContactPage />
      break;
      default:
  }
  return (

      <main> 
        <Navbar />
        <BackgroundPic />
        {component}
      </main>

  );
}

export default App;
//    {/* // <HashRouter basename='/'> */}    {/* // </HashRouter> */}
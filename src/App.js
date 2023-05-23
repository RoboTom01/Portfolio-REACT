import './App.css';
import React from 'react';
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
      break
    case "/Portfolio-REACT/ProjectsPage":
      component = <ProjectPage />
      break
    case "/Portfolio-REACT/ContactPage":
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

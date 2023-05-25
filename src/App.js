import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from'../src/components/Navbar';
import BackgroundPic from '../src/components/BackgroundPic';
import HomePage from './pages/Homepage';
import ContactPage from './pages/ContactPage';
import ProjectPage from './pages/ProjectsPage';

function App() {
  return (

      <main> 

          <Router>
          <Navbar />
          <BackgroundPic />
          <Routes>
          <Route 
            path="/Portfolio-REACT/" 
            element={<HomePage />} 
          />
          <Route 
            path="/ProjectsPage" 
            element={<ProjectPage />} 
          />
          <Route 
            path="/ContactPage" 
            element={<ContactPage />} 
          />
          </Routes>
        </Router>
      </main>

  );
}

export default App;

import React from 'react';
import './App.css';
import './components/Navbar';
import './components/BackgroundPic';
import './components/About';
import './components/Projects';
import './components/Contact';


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
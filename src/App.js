import React from 'react';
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import './App.css';
import CareerObjective from './components/careerObjective/CareerObjective';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Experience from './components/experiance/Experiance';
import Certificate from './components/certificate/Certificate';
import Education from './components/education/Education';
import Project from './components/project/Project';

function App() {
  return (
    <Router> 
      <Routes>
        <Route path='App' element={App} />
        <Route path="/" element={<Home />} />
        <Route path="/CareerObjective" element={<CareerObjective />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path='/Certificate' element={<Certificate />} />
        <Route path='/Education' element={<Education />} />
        <Route path='/Project' element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;

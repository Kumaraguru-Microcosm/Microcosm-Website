import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Adjust path as needed
import AboutPage from './pages/AboutPage'; // Import AboutPage
import ProjectPage from './pages/ProjectPage';
import ProjectDetails from './components/project/ProjectDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} /> 
        <Route path="/projects" element={<ProjectPage />} /> 
        <Route path="/details/:id" element={<ProjectDetails />} /> 
      </Routes>
    </Router>
  );
}

export default App;

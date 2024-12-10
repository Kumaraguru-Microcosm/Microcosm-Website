import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Adjust path as needed
import AboutPage from './pages/AboutPage'; // Import AboutPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;

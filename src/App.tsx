import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage"; // Adjust path as needed
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import SingleProject from "./pages/SingleProject";
import useScript from "./hooks/useScript";
function App() {
  useScript();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<SingleProject />} />
      </Routes>
    </Router>
  );
}

export default App;

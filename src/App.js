import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import About from './Pages/Home/About';
import Project from './Pages/Home/Project';
import Work from './Pages/Home/Project';
import Contact from './Pages/Home/Contact';
import Footer from "./Pages/Home/Footer"

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/project" element={<Project />} />
              <Route path="/work" element={<Work />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;

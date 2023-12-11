import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
// import Home from "./Pages/Home/Homescreen/Home";
import About from './Pages/Home/About';
import Experience from './Pages/Home/Experience';
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
              <Route path="/experience" element={<Experience />} />
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

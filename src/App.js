import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SmoothScrollBar from "./components/SmoothScrollBar";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ErrorBoundary from "./config/error";
import Resume from "./pages/Resume";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Navbar />
        <SmoothScrollBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
          <Footer />
        </SmoothScrollBar>
      </Router>
    </ErrorBoundary>
  );
}

export default App;

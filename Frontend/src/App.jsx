import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Profile from './pages/Profile';
import { motion, AnimatePresence } from 'framer-motion';
import SingleProject from './pages/SingleProject';
import AddProject from './pages/AddProject';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/Single" element={<SingleProject />} />
            <Route path="/Add" element={<AddProject />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
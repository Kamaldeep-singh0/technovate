import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Profile from './pages/Profile';
import { AnimatePresence } from 'framer-motion';

import AddProject from './pages/AddProject';
import Auth from './pages/Auth';
import ProjectDetail from './pages/ProjectDetail';

// Layout component that includes Navbar
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

// Main App component
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <AnimatePresence mode="wait">
          <Routes>
            {/* Auth route without Layout */}
            <Route path="/Auth" element={<Auth />} />
            
            {/* All other routes with Layout */}
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/projects" element={<Layout><Projects /></Layout>} />
            <Route path="/profile" element={<Layout><Profile /></Layout>} />
            <Route path="/project/:id" element={<Layout><ProjectDetail /></Layout>} />
            <Route path="/Add" element={<Layout><AddProject /></Layout>} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
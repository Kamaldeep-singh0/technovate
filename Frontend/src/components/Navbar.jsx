import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Rocket, Layout, User } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed w-full bg-black border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Rocket className="w-8 h-8" />
            <span className="text-xl font-bold">ProjectHub</span>
          </Link>
          
          <div className="flex space-x-8">
            <NavLink to="/projects" active={location.pathname === '/projects'}>
              <Layout className="w-5 h-5" />
              <span>Projects</span>
            </NavLink>
            <NavLink to="/profile" active={location.pathname === '/profile'}>
              <User className="w-5 h-5" />
              <span>Profile</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children, active }) => (
  <Link
    to={to}
    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors
      ${active ? 'bg-white text-black' : 'text-white/70 hover:text-white hover:bg-white/10'}`}
  >
    {children}
  </Link>
);

export default Navbar;
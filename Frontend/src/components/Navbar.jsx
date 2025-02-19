import React from 'react';
import { Search, FolderPlus, Menu, X } from 'lucide-react';
import { SearchBar } from './SearchBar';
import { PostProjectButton } from './PostProjectButton';

export const Navbar = ({ isMenuOpen, setIsMenuOpen }) => (
  <nav className="fixed top-0 w-full bg-black border-b border-gray-800 z-50">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between items-center h-14">
        <div className="flex items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden mr-4 p-1 rounded-lg hover:bg-gray-800"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <h1 className="text-2xl font-serif font-bold bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
            Profolio
          </h1>
          <SearchBar />
        </div>
        <PostProjectButton />
      </div>
    </div>
  </nav>
);
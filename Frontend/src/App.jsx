
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { FeaturedProject } from './components/FeaturedProject';
import { ProjectCard } from './components/ProjectCard';
import { UserProfile } from './components/UserProfile';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    { 
      title: 'E-commerce Platform',
      rating: 4,
      tech: ['Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=80',
      github: 'https://github.com/ecommerce/platform',
      live: 'https://eco-platform-demo.vercel.app'
    },
    {
      title: 'Social Media Dashboard',
      rating: 5,
      tech: ['React', 'Firebase'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
      github: 'https://github.com/social/dashboard',
      live: 'https://social-dash.netlify.app'
    },
    {
      title: 'Task Management System',
      rating: 4,
      tech: ['Vue', 'GraphQL'],
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80',
      github: 'https://github.com/taskify/management',
      live: 'https://taskify-app.vercel.app'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-40 lg:hidden backdrop-blur-sm" 
          onClick={() => setIsMenuOpen(false)}
        >
          <div 
            className="w-64 h-full bg-gray-900" 
            onClick={e => e.stopPropagation()}
          >
            <Sidebar />
          </div>
        </div>
      )}

      <div className="pt-14 flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-64 fixed h-screen border-r border-gray-800 bg-black">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="w-full lg:ml-64 lg:mr-80 px-4 md:px-8 py-6">
          <div className="max-w-3xl mx-auto">
            <FeaturedProject />
            
            <div className="flex flex-col gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar - User Profile */}
        <div className="hidden lg:block w-80 fixed right-0 h-screen border-l border-gray-800 bg-black p-6">
          <UserProfile />
        </div>
      </div>
    </div>
  );
};

export default App;